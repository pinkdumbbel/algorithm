### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

기본적으로 bfs로 푸는 방식인건 동일함

1번 풀이

- 그룹핑을 통해서 해결
- 석유가 시추된 행,열에 groupId를 지정하여 그룹핑
- bfs순회가 끝나면(석유가 발견된 덩어리 체크가 끝나면) groupId를 하나 증가시켜 다음 석유 발견된 덩어리 그룹을 구함
- groupCnt에 각 덩어리별 수를 저장한다 (index는 groupId)
- 행을 기준으로 순회하며 각 행에서 시추 할 수 있는 모든 석유 덩어리 개수를 구해서 리턴한다.

2번 풀이

- land에 시추가 된 경우에는 그냥 0으로 할당 (이 과정에서 visited 처리됨)
- 열을 기준으로 [석유 덩어리, 시작열, 끝열]을 구함
- 시작열은 bfs를 탐색하면서 시작열 > 움직인 열 인 경우에만 변경
- 끝열은 bfs를 탐색하면서 끝열 < 움직인 열 인 경우에만 변경
- 그렇게 누적된 석유 덩어리를 시작열, 끝열 까지 순회하며 누적함
- 누적된 행중 가장 큰 수를 리턴

### 다른 풀이 코드

```js
function solution(land) {
  const rows = land.length;
  const cols = land[0].length;

  const ds = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = Array.from({ length: rows }, () =>
    Array.from({ length: cols }).fill(false)
  );
  const group = Array.from({ length: rows }, () =>
    Array.from({ length: cols }).fill(-1)
  );

  const groupCnt = [];
  let groupId = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[i][j] || !land[i][j]) continue;

      let cnt = 1;
      const queue = [[i, j]];
      visited[i][j] = true;
      group[i][j] = groupId;

      while (queue.length) {
        const [cy, cx] = queue.shift();

        for (const [dy, dx] of ds) {
          const my = cy + dy;
          const mx = cx + dx;

          if (my < 0 || my >= rows || mx < 0 || mx >= cols) continue;
          if (visited[my][mx] || !land[my][mx]) continue;

          cnt++;
          visited[my][mx] = true;
          group[my][mx] = groupId;
          queue.push([my, mx]);
        }
      }

      groupCnt[groupId++] = cnt;
    }
  }

  let answer = 0;
  for (let col = 0; col < cols; col++) {
    const set = new Set();
    for (let row = 0; row < rows; row++) {
      if (group[row][col] > -1) {
        set.add(group[row][col]);
      }
    }

    let sum = 0;
    set.forEach((id) => {
      sum += groupCnt[id];
    });

    answer = Math.max(answer, sum);
  }

  return answer;
}
```

```js
function solution(land) {
  const rows = land.length;
  const cols = land[0].length;

  const ds = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (y, x) => {
    const queue = [[y, x]];
    const oil = [0, x, x];

    while (queue.length) {
      const [cy, cx] = queue.shift();
      if (!land[cy][cx]) continue;

      oil[0]++;
      land[cy][cx] = 0;

      if (oil[1] > cx) oil[1] = cx;
      if (oil[2] < cx) oil[2] = cx;

      for (const [dy, dx] of ds) {
        const my = cy + dy;
        const mx = cx + dx;

        if (my < 0 || my >= rows || mx < 0 || mx >= cols) continue;
        if (!land[my][mx]) continue;

        queue.push([my, mx]);
      }
    }

    return oil;
  };

  const values = Array.from({ length: cols }).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (land[i][j]) {
        let [cnt, start, end] = bfs(i, j);
        while (start <= end) values[start++] += cnt;
      }
    }
  }

  return Math.max(...values);
}
```

### 회고
