### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(n, t, m, p) {
  let answer = "";
  let cnt = 0;
  let turn = 0;

  while (answer.length < t) {
    const str = (cnt++).toString(n).toUpperCase();

    for (const s of str) {
      if (turn++ % m === p - 1) answer += s;
      if (answer.length === t) return answer;
    }
  }

  return answer;
}
```

### 다른 풀이 방법

- t만큼 먼저 튜브의 모든 순서 배열을 만든다.
- 각 수마다 진법변환된 문자열을 누적한다.
- 누적된 문자열에서 튜브의 순서만 골라낸다

### 다른 풀이 코드

```js
function solution(n, t, m, p) {
  let answer = "";
  const turns = new Array(t).fill(0).map((_, i) => p + i * m - 1);
  const max = m * t;
  let str = "";

  for (let i = 0; i <= max; i++) {
    str += i.toString(n);
  }

  return turns
    .map((turn) => str[turn])
    .join("")
    .toUpperCase();
}
```

### 회고
