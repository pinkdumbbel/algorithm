### 풀이 결과

품

### 내 풀이 방법

1. 단어를 기록할 hash를 만든다
2. 단어를 순회하며 탈락조건에 해당하는 경우 그에 해당하는 번호와 몇번째 인지 구해서 리턴한다.

### 내 풀이 코드

```js
function solution(n, words) {
  const answer = [0, 0];
  const map = new Map();

  map.set(words[0], true);

  for (let i = 1; i < words.length; i++) {
    const current = words[i];
    const prev = words[i - 1];

    if (map.get(current) || current[0] !== prev[prev.length - 1]) {
      const loser = !((i + 1) % n) ? n : (i + 1) % n;
      answer[0] = loser;
      answer[1] = Math.ceil((i + 1) / n);
      return answer;
    }

    map.set(current, true);
  }

  return answer;
}
```

### 다른 풀이 방법

기본적으로 다들 풀이가 비슷함

### 다른 풀이 코드

```js

```

### 회고
