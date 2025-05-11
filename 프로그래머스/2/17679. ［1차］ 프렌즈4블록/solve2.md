### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(m, n, board) {
  let answer = 0;
  board = board.map((blocks) => blocks.split(""));
  const set = new Set();
  let i = 0;

  while (true) {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const block = board[i][j];

        if (
          block &&
          board[i][j + 1] === block &&
          board[i + 1][j] === block &&
          board[i + 1][j + 1] === block
        ) {
          set.add(`${i},${j}`);
          set.add(`${i},${j + 1}`);
          set.add(`${i + 1},${j}`);
          set.add(`${i + 1},${j + 1}`);
        }
      }
    }

    if (set.size === 0) return answer;

    set.forEach((value) => {
      const [i, j] = value.split(",");
      board[i][j] = null;
    });

    answer += set.size;
    set.clear();

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j]) {
              board[i][j] = board[k][j];
              board[k][j] = null;
              break;
            }
          }
        }
      }
    }
  }
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고
