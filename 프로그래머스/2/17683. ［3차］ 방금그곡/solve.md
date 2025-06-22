### 풀이 결과

품

### 내 풀이 방법

주어진 문자열을 정해진 음으로 자른다 ex ['C', 'C#'];
노래의 시작 시간 - 종료 시간 을 구해서 노래를 이어 붙인다.
이어 붙인 노래를 순회하면서 찾고자하는 음악과 같으면 그 값을 저장한다.
정렬한 이후 답을 구한다.

### 내 풀이 코드

```js
function solution(m, musicinfos) {
  const getTime = (s) => {
    const [hour, minute] = s.split(":").map(Number);
    return hour * 60 + minute;
  };

  const musics = [];
  const totalMusics = [];
  musicinfos = musicinfos.map((musicinfo) => musicinfo.split(","));

  const regex = /C#|D#|F#|G#|A#|E#|B#|C|D|E|F|G|A|B/g;
  const oms = m.match(regex);

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, name, music] = musicinfos[i];
    const startTime = getTime(start);
    const endTime = getTime(end);
    const diff = endTime - startTime;
    const ms = music.match(regex);

    const repeat = Math.floor(diff / ms.length);
    const remain = diff % ms.length;

    const totalMusic = [];
    for (let j = 0; j < repeat; j++) {
      totalMusic.push(...ms);
    }
    totalMusic.push(...ms.slice(0, remain));

    for (let k = 0; k < totalMusic.length; k++) {
      if (totalMusic.slice(k, k + oms.length).join("") === m) {
        totalMusics.push([name, totalMusic]);
        break;
      }
    }
  }

  totalMusics.sort((a, b) => b[1].length - a[1].length);

  if (!totalMusics[0]) return "(None)";

  return totalMusics[0][0];
}
```

### 다른 풀이 방법

접근 방식은 나와 동일 하지만
코드상에서 차이점은

- 샵이 포함된 문자는 소문자로 변경해서 문자열 재구성=. ex) C# -> c
- diff/음악의 길이 만큼을 올림한다.
- 올림된 수만큼 문자열을 repeat으로 반복한다.
- 음악이 재생된 길이만큼 문자열을 자른다.
- 자른 문자열이 m(찾고자하는 음악)과 같으면 재목과 duration과 순서의 객체를 push한다.
- 정렬 이후 정답을 구한다.

### 다른 풀이 코드

```js
function solution(m: string, musicinfos: string[]): string {
  const replaceSharps = (str: string): string => {
    return str
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a")
      .replace(/A#/g, "b")
      .replace(/E#/g, "e");
  };

  const getDuration = (start: string, end: string): number => {
    const [sHour, sMin] = start.split(":").map(Number);
    const [eHour, eMin] = end.split(":").map(Number);
    return eHour * 60 + eMin - (sHour * 60 + sMin);
  };

  const processedM = replaceSharps(m);
  const candidates: { title: string, duration: number, index: number }[] = [];

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, sheet] = musicinfos[i].split(",");
    const duration = getDuration(start, end);
    const processedSheet = replaceSharps(sheet);

    const repeated = processedSheet.repeat(
      Math.ceil(duration / processedSheet.length)
    );
    const played = repeated.substring(0, duration);

    if (played.includes(processedM)) {
      candidates.push({ title, duration, index: i });
    }
  }

  candidates.sort((a, b) =>
    a.duration !== b.duration ? b.duration - a.duration : a.index - b.index
  );

  return candidates.length ? candidates[0].title : "(None)";
}
```

### 회고

어이 없는게 문제에선 12개인데 어떻게 해도 예외가 처리 안되길래 봤더니 B#이 추가되었단다.
괜히 삽질함...
