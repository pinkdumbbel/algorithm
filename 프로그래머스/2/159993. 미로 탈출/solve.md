### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(maps) {
  const findPoint = (target) => {
    for (let i = 0; i < maps.length; i++) {
      for (let j = 0; j < maps[i].length; j++) {
        if (maps[i][j] === target) return [i, j];
      }
    }
  };

  const bfs = (start, end) => {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [[start[0], start[1], 0]];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
      const [x, y, time] = queue.shift();
      if (x === end[0] && y === end[1]) return time;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
          if (!visited[nx][ny] && maps[nx][ny] !== "X") {
            visited[nx][ny] = true;
            queue.push([nx, ny, time + 1]);
          }
        }
      }
    }
    return -1;
  };

  const start = findPoint("S");
  const lever = findPoint("L");
  const exit = findPoint("E");

  const toLever = bfs(start, lever);
  if (toLever === -1) return -1;

  const toExit = bfs(lever, exit);
  return toExit === -1 ? -1 : toLever + toExit;
}
```

### 회고

처음엔 dfs인줄 알았다 물론 못풀었지만 그런데 gpt가 풀어준 코드로 해도 타임아웃 에러가 나서
bfs로 풀었더니 통과 되었다.

이렇게 최단경로 와 관련된 문제를 보면 일단 bfs를 먼저 떠올릴듯 하다.
