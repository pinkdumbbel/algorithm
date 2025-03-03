### 풀이 결과

못품

### 다른 풀이 방법

- Set을 선언한다.
- board를 순회하며 4개의 블록이 모두 같으면 Set에 좌표를 저장한다.
- board를 순회 했을대 Set의 size가 0 이면 break 한다.
- answer에 Set의 size를 누적한다.
- 제거된 좌표에 블록을 떨어뜨려 재정렬한다.

재정렬 로직

1. 보드의 맨 아래 행(i) 부터 순회한다.
2. 현재 순회중인 행의 모든 값이 채워져 있으면 건너뛴다.
3. 열(j)이 순회 할때 해당 행의열(board[i][j])이 비워져 있으면 i의 위의 행부터 순회 하며 값이 있으면 그 값으로 바꾸고 없으면 건너뛴다.

### 다른 풀이 코드

```javascript
function solution(m, n, board) {
  let answer = 0;
  board = board.map((s) => s.split(""));

  while (true) {
    const toRemoved = new Set();

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const v = board[i][j];
        if (
          v &&
          v === board[i][j + 1] &&
          v === board[i + 1][j] &&
          v === board[i + 1][j + 1]
        ) {
          toRemoved.add(`${i}:${j}`);
          toRemoved.add(`${i}:${j + 1}`);
          toRemoved.add(`${i + 1}:${j}`);
          toRemoved.add(`${i + 1}:${j + 1}`);
        }
      }
    }

    if (toRemoved.size === 0) break;

    answer += toRemoved.size;
    toRemoved.forEach((v) => {
      const [i, j] = v.split(":").map(Number);
      board[i][j] = null;
    });

    for (let i = m - 1; i >= 0; i--) {
      if (board[i].every((v) => v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0; k--) {
          if (board[i][j]) break;

          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = null;
          }
        }
      }
    }
  }

  return answer;
}
```

### 회고

board를 계속 순회하며 4블록이 하나도 맞지 않는 경우까지 찾는건 할만 했는데
블록을 제거하고 위에서 떨어뜨려서 재정렬 하는 로직이 참 이해 하기 어려웠다...
