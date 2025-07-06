### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

DP를 이용해서 해결
순회를 하면서 DP에 우 하단 기준 최대값을 누적한 후에 그 값을 제곱함

### 다른 풀이 코드

```js
function solution(board) {
  let answer = 0;
  const rows = board.length;
  const cols = board[0].length;

  const dp = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    dp[row][0] = board[row][0];
    answer = Math.max(dp[row][0], answer);
  }

  for (let col = 0; col < cols; col++) {
    dp[0][col] = board[0][col];
    answer = Math.max(dp[0][col], answer);
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (board[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        answer = Math.max(dp[i][j], answer);
      }
    }
  }

  return answer * answer;
}
```

### 회고

이 문제는 답을 봐도 이해를 못했다...
DP는 진짜 이 문제가 DP인줄도 모르겠고 어떤 값을 DP에 누적을 해야 될지도 잘 모르겠다...
