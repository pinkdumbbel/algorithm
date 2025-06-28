### 풀이 결과

품(힌트를 얻어서)

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(rows, columns, queries) {
  const answer = [];
  const mat = [];
  queries = queries.map((row) => row.map((col) => col - 1));

  for (let i = 0; i < rows; i++) {
    const arr = [];
    for (let j = i * columns + 1; j <= i * columns + columns; j++) {
      arr.push(j);
    }
    mat.push(arr);
  }

  for (const [y1, x1, y2, x2] of queries) {
    const border = [];

    for (let j = x1; j < x2; j++) {
      border.push(mat[y1][j]);
    }

    for (let i = y1; i < y2; i++) {
      border.push(mat[i][x2]);
    }

    for (let j = x2; j > x1; j--) {
      border.push(mat[y2][j]);
    }

    for (let i = y2; i > y1; i--) {
      border.push(mat[i][x1]);
    }

    const rotated = [border[border.length - 1], ...border.slice(0, -1)];

    let idx = 0;

    for (let j = x1; j < x2; j++) {
      mat[y1][j] = rotated[idx++];
    }

    for (let i = y1; i < y2; i++) {
      mat[i][x2] = rotated[idx++];
    }

    for (let j = x2; j > x1; j--) {
      mat[y2][j] = rotated[idx++];
    }

    for (let i = y2; i > y1; i--) {
      mat[i][x1] = rotated[idx++];
    }

    answer.push(Math.min(...rotated));
  }

  return answer;
}
```

### 다른 풀이 방법

내 풀이와 다른풀이의 다른점은
내 풀이는 회전을 해야되는 요소들을 모두 다른 배열에 저장해놓았다가 처리했고
다른 풀이는 순회를 하는 그즉시 변경을 해버린 차이가 있다.

### 다른 풀이 코드

```js
function solution(rows, columns, queries) {
  const a = [...Array(rows)].map((_, r) =>
    [...Array(columns)].map((_, c) => r * columns + c + 1)
  );
  const mins = [];

  queries.map((query) => {
    const [x1, y1, x2, y2] = query.map((_) => _ - 1);
    let min = a[x1][y1],
      tmp = a[x1][y1];

    for (let i = x1; i < x2; i++) {
      a[i][y1] = a[i + 1][y1];
      min = Math.min(min, a[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      a[x2][i] = a[x2][i + 1];
      min = Math.min(min, a[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      a[i][y2] = a[i - 1][y2];
      min = Math.min(min, a[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      a[x1][i] = a[x1][i - 1];
      min = Math.min(min, a[x1][i]);
    }
    a[x1][y1 + 1] = tmp;

    mins.push(min);
  });

  return mins;
}
```

### 회고
