### 풀이 결과

못품

### 내가 작성한 코드

```javascript
function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];

    while (stack.length && prices[stack[stack.length - 1]] > current) {
      const idx = stack.pop();
      answer[idx] += 1;
    }

    stack.forEach((idx) => {
      answer[idx] += 1;
    });

    stack.push(i);
  }

  return answer;
}
```

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

이번엔 70%정도 그래도 스스로 접근 한듯하다.
스택에 인덱스를 push하고 스택의 마지막 값이 prices의 현재값보다 크면 그때 pop을 해주는것도 비슷한데
한가지 현재 인덱스 기준 이후의 개수를 구하는 방법에 prices의 길이를 사용해야 된다는 부분을 생각하지 못했다...
이렇게 점점 발전해나가야 겠다...
