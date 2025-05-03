### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(n, k) {
  let answer = 0;
  let stack = [];
  const str = n.toString(k);

  for (const s of str) {
    if (s === "0") {
      if (isPrime(stack.join(""))) answer++;
      stack = [];
    } else {
      stack.push(s);
    }
  }

  if (isPrime(stack.join(""))) answer++;

  return answer;
}

const isPrime = (n) => {
  if (!n || n == 1 || n == 0) return false;

  n = Number(n);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false;
  }

  return true;
};
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

흠... 어째 이전에 풀었던거 보다 더 복잡하게 풀었다... 당황스럽...
