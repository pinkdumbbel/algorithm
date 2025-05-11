### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(numbers) {
  const n = numbers.length;
  const chk = Array(n).fill(false);

  const set = new Set();

  const isPrime = (n) => {
    n = Number(n);
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const dfs = (s = "") => {
    if (isPrime(s)) set.add(Number(s));

    for (let i = 0; i < n; i++) {
      if (!chk[i]) {
        chk[i] = true;
        dfs(s + numbers[i]);
        chk[i] = false;
      }
    }
  };

  dfs();

  return set.size;
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

확실히 완탐류의 순열은 이제 잘 푸는듯 하다...
