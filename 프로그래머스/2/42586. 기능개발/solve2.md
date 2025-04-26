### 풀이 결과

품

### 내 풀이 방법

1. 각 작업별 몇일이 걸리는지 구해서 배열로 저장한다.
2. 날짜 배열을 순회하며 값을 비교하며 작거나 같으면 카운팅 크면 answer에 push 및 값 초기화를 해준다

### 내 풀이 코드

```js
function solution(progresses, speeds) {
  const answer = [];
  const tmp = [];

  progresses.forEach((p, i) => {
    const speed = speeds[i];
    const day = Math.ceil((100 - p) / speed);

    tmp.push(day);
  });

  let max = tmp[0];
  let cnt = 1;

  for (let i = 1; i < tmp.length; i++) {
    const day = tmp[i];
    if (max >= day) {
      cnt++;
    } else {
      answer.push(cnt);
      cnt = 1;
      max = day;
    }
  }

  answer.push(cnt);

  return answer;
}
```

### 다른 풀이 방법

나와 접근한 방법은 같다
다만 다른점은

- 날짜로 변환하는 로직을 map을 통해 구현
- 값을 비교하는 로직의 인덱스를 0 부터 시작

### 다른 풀이 코드

```js
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
```

### 회고

되게 금방 풀었다. 실력이 좀 는거 같기도 ㅎ
다른풀이가 좀 더 깔끔하니 앞으로 저런 방식으로 푸는 것을 연습 해야겠다.
