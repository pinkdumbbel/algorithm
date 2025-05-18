### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  let row = -1;
  let col = 0;
  let fill = 0;

  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
  }

  return a.flat();
}
```

### 회고

다시 풀어보자...
