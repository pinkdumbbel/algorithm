### 풀이 결과

품 (도움을 받아서...)

### 내가 생각한 방법

- 스택으로 해결
- 현재 순회중인 값이 스택의 마지막 값보다 크다면 stack에서 제거 및 제거 횟수 차감
- 스택을 문자열로 변환

### 내 코드

```js
function solution(number, k) {
  const arr = number.split("").map(Number);
  const n = arr.length;

  const stack = [];

  for (const num of arr) {
    while (stack.length && num > stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }

    stack.push(num);
  }

  if (stack.length === n) stack.pop();

  return stack.join("");
}
```

### 다른 풀이 코드

```javascript
function solution(number, k) {
  const stack = [];
  for (let num of number) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  if (k > 0) {
    stack.splice(stack.length - k, k);
  }

  return stack.join("");
}
```

### 회고

풀긴 했지만 조금 찝찝 했던부분이
1_000_000 이런 엣지케이스의 경우에는 제거 횟수 차감이 안되는데
이런 케이스를 나는 단순히 기존 문자열 길이와 stack의 길이와 비교해서 하나 빼주는 정도로만 처리 했다.
하지만 다른 풀이 케이스에서는 남은 k만큼 잘라내도록 구현 했는데 확실히 더 명확한 풀이인듯 하다.
그래도 초반에 삽질좀 했지만 스택으로 풀어야 된다고 인지하고 풀어서 이전보다 성장한듯 하여 뿌듯하다.
