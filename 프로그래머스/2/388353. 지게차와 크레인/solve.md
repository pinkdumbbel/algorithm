### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;

  storage = storage.map((c) => c.split(""));
  const ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = new Set();

  const bfs = (current, target) => {
    const queue = [current];
    visited.add(`${current[0]},${current[1]}`);

    while (queue.length) {
      const [cy, cx] = queue.shift();

      for (const [dy, dx] of ds) {
        const my = cy + dy;
        const mx = cx + dx;

        if (my >= n || my < 0 || mx >= m || mx < 0) continue;
        if (visited.has(`${my},${mx}`)) continue;

        const v = storage[my][mx];
        visited.add(`${my},${mx}`);

        if (v) {
          if (v === target) storage[my][mx] = null;
        } else {
          queue.push([my, mx]);
        }
      }
    }
  };

  for (const request of requests) {
    if (request.length === 2) {
      const target = request[0];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (storage[i][j] === target) storage[i][j] = null;
        }
      }
    } else {
      for (let i = 0; i < m; i++) {
        const v = storage[0][i];
        if (!v) {
          bfs([0, i], request);
          continue;
        }

        if (v === request) storage[0][i] = null;
      }

      for (let i = 0; i < m; i++) {
        const v = storage[n - 1][i];
        if (!v) {
          bfs([n - 1, i], request);
          continue;
        }
        if (v === request) storage[n - 1][i] = null;
      }

      for (let i = 1; i < n - 1; i++) {
        const v = storage[i][0];
        if (!v) {
          bfs([i, 0], request);
          continue;
        }
        if (v === request) storage[i][0] = null;
      }

      for (let i = 1; i < n - 1; i++) {
        const v = storage[i][m - 1];
        if (!v) {
          bfs([i, m - 1], request);
          continue;
        }
        if (v === request) storage[i][m - 1] = null;
      }
    }
  }

  return storage.flat().filter((v) => v).length;
}
```

### 다른 풀이 방법

내 풀이와의 차이점은 visited가 초기화 되는 로직이 다르다 나는 전에서 처리를 했고
정답 코드는 request가 새로 돌때 마다 visited를 초기화 한다.

### 다른 풀이 코드

```js
function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;

  storage = storage.map((row) => row.split(""));
  const ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bfs = (target) => {
    const queue = [];
    const visited = Array.from({ length: n }, () =>
      Array.from({ length: m }).fill(false)
    );

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
          if (storage[i][j] === target) {
            storage[i][j] = null;
            visited[i][j] = true;
          } else if (storage[i][j] === null && !visited[i][j]) {
            queue.push([i, j]);
            visited[i][j] = true;
          }
        }
      }
    }

    while (queue.length) {
      const [y, x] = queue.shift();

      for (const [dy, dx] of ds) {
        const ny = y + dy;
        const nx = x + dx;

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (visited[ny][nx]) continue;

        visited[ny][nx] = true;

        if (storage[ny][nx] === target) {
          storage[ny][nx] = null;
        } else if (storage[ny][nx] === null) {
          queue.push([ny, nx]);
        }
      }
    }
  };

  for (const request of requests) {
    if (request.length === 2) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          const v = storage[i][j];
          if (v === request[0]) storage[i][j] = null;
        }
      }
    } else {
      bfs(request);
    }
  }

  return storage.flat().filter((v) => v !== null).length;
}
```

### 회고

문제를 접근하는 방식은 맞았는데 초기화 로직을 잘못 구현해서 틀렸다...
