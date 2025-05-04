### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const current = prices[i];

    if (prices[stack[stack.length - 1]] > current) {
      while (stack.length && prices[stack[stack.length - 1]] > current) {
        const idx = stack.pop();
        answer[idx]++;
      }
    }

    for (const index of stack) {
      answer[index]++;
    }

    stack.push(i);
  }

  return answer;
}
```

### 다른 풀이 방법

기본적으로 누적하는 방법은 같으나
인덱스를 기준으로 뒤에 얼마나 있는지 구하는 방법이 다름 매번 stack에 있는 값을 증가시키는거 보다 훨씬 빠름

### 다른 풀이 코드

```js
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}
```

### 회고
