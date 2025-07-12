### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

### 다른 풀이 코드

재귀로 해결
cnt === 1 즉 가장 위의 원판은 바로 옮길수 있음
원판이 2개 이상인 경우에는 임시의 위치로 옮긴다.
가장 마지막 원판을 옮긴다.
임시 원판에서 마지막 위치로 원판을 옮긴다.

```js
function solution(n) {
  const answer = [];

  const hanoi = (cnt, start = 1, end = 3, tmp = 2) => {
    if (cnt === 1) {
      answer.push([start, end]);
      return;
    } else {
      hanoi(cnt - 1, start, tmp, end);

      answer.push([start, end]);

      hanoi(cnt - 1, tmp, end, start);
    }
  };

  hanoi(n);

  return answer;
}
```

### 회고
