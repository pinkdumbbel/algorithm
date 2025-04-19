### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(arr1, arr2) {
  return arr1.map((rows) =>
    arr2[0].map((_, row) =>
      rows.reduce((a, b, col) => a + b * arr2[col][row], 0)
    )
  );
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고
