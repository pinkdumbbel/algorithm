### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(order) {
  let answer = 0;

  const queue = Array(order.length)
    .fill(0)
    .map((_, i) => i + 1);
  const stack = [];

  let qi = 0;
  let oi = 0;

  while (qi < order.length) {
    const box = queue[qi++];

    if (box === order[oi]) {
      answer++;
      oi++;
    } else {
      while (stack.length && stack[stack.length - 1] === order[oi]) {
        answer++;
        oi++;
        stack.pop();
      }
      stack.push(box);
    }
  }

  while (stack.length) {
    if (order[oi] !== stack.pop()) return answer;

    answer++;
    oi++;
  }

  return answer;
}
```

### 다른 풀이 방법

큐의 개념을 사용하지 않는다.
일단 box를 1부터 순회하면서 모든 값을 스택에 저장한다.
스택의 마지막 값이 꺼내고자 하는 박스와 같으면 stack을 pop하고 개수를 증가시킨다.

### 다른 풀이 코드

```js
function solution(order) {
  const stack = [];
  let index = 0;
  let count = 0;

  for (let box = 1; box <= order.length; box++) {
    stack.push(box);

    while (stack.length && stack[stack.length - 1] === order[index]) {
      stack.pop();
      index++;
      count++;
    }
  }

  return count;
}
```

### 회고
