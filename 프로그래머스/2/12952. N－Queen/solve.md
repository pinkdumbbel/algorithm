### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

- 1번 풀이는 현재 행과 열 기준으로 위쪽 을 모두 체크하는 방식으로 처리
- 2번 풀이는 대각선을 수학적 개념을 사용하여 처리
  - 대각선은 현재 좌표 기준으로 가로 이동거리 = 세로 이동거리 여야함
  - 그렇기 때문에 각 좌표 기준으로 절대값이 같으면 대각선에 존재한다고 판단

### 다른 풀이 코드

```js
function solution(n) {
  let answer = 0;
  const check = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) {
      if (check[i][col]) return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (check[i][j]) return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (check[i][j]) return false;
    }

    return true;
  };

  const backtrack = (row = 0) => {
    if (row === n) {
      answer++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        check[row][col] = true;
        backtrack(row + 1);
        check[row][col] = false;
      }
    }
  };

  backtrack();

  return answer;
}
```

```js
function solution(n) {
  let count = 0;
  const queens = new Array(n).fill(-1); // queens[i] = j는 i행 j열에 퀸이 있다는 의미

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      // 같은 열에 퀸이 있는지 확인
      if (queens[i] === col) return false;

      // 대각선에 퀸이 있는지 확인
      if (Math.abs(queens[i] - col) === Math.abs(i - row)) return false;
    }
    return true;
  }

  function backtrack(row) {
    // 모든 행에 퀸을 성공적으로 배치한 경우
    if (row === n) {
      count++;
      return;
    }

    // 현재 행의 각 열에 퀸을 배치해보기
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        queens[row] = col;
        backtrack(row + 1);
        queens[row] = -1; // 백트래킹
      }
    }
  }

  backtrack(0);
  return count;
}
```

### 회고

아마 내가 풀떄는 1번 풀이로 풀듯 하다...
