### 풀이 결과

품

### 내 풀이 방법

각 강의실별 응시자의 위치를 기록한 배열을 만든다.
응시자 위치가 기록된 배열을 강의실별로 순회한다.
거리를 구하고 거리가 1이면 0을 push한다.
거리가 2인경우에 파티션으로 가려져 있는지 확인 후 1 or 0 을 push한다.

### 내 풀이 코드

```js

```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(places) {
  const answer = [];

  // 각 대기실에 대해 거리두기 확인
  for (let room of places) {
    answer.push(checkDistancing(room));
  }

  return answer;
}

function checkDistancing(room) {
  // 모든 응시자(P) 위치 찾기
  const people = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (room[i][j] === "P") {
        people.push([i, j]);
      }
    }
  }

  // 모든 응시자 쌍에 대해 거리두기 확인
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      const [r1, c1] = people[i];
      const [r2, c2] = people[j];

      // 맨해튼 거리 계산
      const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);

      // 맨해튼 거리가 2 이하인 경우 파티션 확인
      if (distance <= 2) {
        if (!isBlocked(room, r1, c1, r2, c2)) {
          return 0; // 거리두기 위반
        }
      }
    }
  }

  return 1; // 거리두기 준수
}

function isBlocked(room, r1, c1, r2, c2) {
  const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);

  // 맨해튼 거리가 1인 경우 (인접한 경우)
  if (distance === 1) {
    return false; // 바로 인접하면 거리두기 위반
  }

  // 맨해튼 거리가 2인 경우 경로 확인
  if (distance === 2) {
    // 같은 행에 있는 경우 (가로로 2칸 떨어짐)
    if (r1 === r2) {
      const midCol = (c1 + c2) / 2;
      return room[r1][midCol] === "X";
    }

    // 같은 열에 있는 경우 (세로로 2칸 떨어짐)
    if (c1 === c2) {
      const midRow = (r1 + r2) / 2;
      return room[midRow][c1] === "X";
    }

    // 대각선에 있는 경우 (L자 형태)
    // 두 경로 모두 확인해야 함
    const path1Blocked = room[r1][c2] === "X";
    const path2Blocked = room[r2][c1] === "X";

    // 두 경로 모두 막혀있어야 거리두기 준수
    return path1Blocked && path2Blocked;
  }

  return true; // 맨해튼 거리가 2보다 크면 거리두기 준수
}
```

### 회고
