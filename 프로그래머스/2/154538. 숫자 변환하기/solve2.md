### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(x, y, n) {
  if (x === y) return 0;

  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    if (i - n >= x) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && i / 2 >= x) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && i / 3 >= x) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

DP로 풀어야 하는 문제였다... DP는 진짜 감이 안오는데 나중에 날잡고 DP만 풀어야 할듯.
