### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(numbers) {
  const answer = [];
  const stack = [];
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack[stack.length - 1]] = numbers[i];
      stack.pop();
    }

    stack.push(i);
  }

  while (stack.length) {
    const i = stack.pop();
    answer[i] = -1;
  }

  return answer;
}
```

### 다른 풀이 방법

내 풀이와 동일한데 미리 answer를 -1로 채워놓는게 다름

### 다른 풀이 코드

```js
function solution(numbers) {
  const n = numbers.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const n = numbers[i];

    while (stack.length > 0 && numbers[stack[stack.length - 1]] < n) {
      result[stack.pop()] = n;
    }
    stack.push(i);
  }

  return result;
}
```

### 회고
