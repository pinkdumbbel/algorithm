### 풀이 결과

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(number, k) {
  const n = number.length;
  const stack = [];
  let removed = 0;

  for (let i = 0; i < n; i++) {
    const v = Number(number[i]);

    while (stack[stack.length - 1] < v && removed < k) {
      stack.pop();
      removed++;
    }

    stack.push(v);
  }

  while (removed < k) {
    stack.pop();
    removed++;
  }

  return stack.join("");
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

k를 감소하는 방식으로 했으면 더 좋았을듯 싶다
