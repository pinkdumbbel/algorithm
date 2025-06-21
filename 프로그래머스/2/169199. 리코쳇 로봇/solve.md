### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

BFS로 해결
일단 시작 좌표를 구하고
그 좌표를 큐에 넣어놓고
bfs순회 하며 최적의 해를 찾음

### 다른 풀이 코드

```js
function solution(board) {
  board = board.map((b) => b.split(""));
  let sx, sy;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        sy = i;
        sx = j;
      }
    }
    if (sy && sx) break;
  }

  const queue = [];
  const visited = new Set();
  const rows = board.length;
  const cols = board[0].length;
  const ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  queue.push([sy, sx, 0]);
  visited.add(`${sy},${sx}`);

  while (queue.length) {
    const [cy, cx, moves] = queue.shift();

    if (board[cy][cx] === "G") return moves;

    for (const [dy, dx] of ds) {
      let ny = cy;
      let nx = cx;

      while (true) {
        let my = ny + dy;
        let mx = nx + dx;

        if (
          my < 0 ||
          my >= rows ||
          mx < 0 ||
          mx >= cols ||
          board[my][mx] === "D"
        )
          break;

        ny = my;
        nx = mx;
      }

      const key = `${ny},${nx}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([ny, nx, moves + 1]);
      }
    }
  }

  return -1;
}
```

### 회고
