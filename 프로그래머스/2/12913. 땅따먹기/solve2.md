### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

a = 이전 행까지의 각 열별 누적 점수
b = 현재 행의 각 열별 점수
매 순회 마다 현재 행의 열을 선택 = 현재 점수 + 이전 행에서 선택된 열을 제외한 최대값

### 다른 풀이 코드

```js
function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, b) => [
        b[0] + Math.max(a[1], a[2], a[3]),
        b[1] + Math.max(a[0], a[2], a[3]),
        b[2] + Math.max(a[0], a[1], a[3]),
        b[3] + Math.max(a[0], a[1], a[2]),
      ],
      [0, 0, 0, 0]
    )
  );
}
```

### 회고
