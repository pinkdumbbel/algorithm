### 풀이 결과

못품

### 내 풀이 방법

DFS로 접근

### 내 풀이 코드

```js
function solution(n, k) {
  const answer = [];
  const chk = Array.from({ length: n + 1 }, () => false);
  let cnt = 0;

  const dfs = (arr) => {
    if (answer.length) return;

    if (arr.length === n) {
      cnt++;
      if (cnt === k) {
        answer.push(...arr);
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (!chk[i]) {
          chk[i] = true;
          dfs([...arr, i]);
          chk[i] = false;
        }
      }
    }
  };

  dfs([]);

  return answer;
}
```

### 다른 풀이 방법

팩토리얼숫자체계??? 이걸로 접근

### 다른 풀이 코드

```js
function solution(n, k) {
  const factorials = [1];
  for (let i = 1; i < n; i++) {
    factorials[i] = factorials[i - 1] * i;
  }

  const available = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];
  let currentK = k - 1;

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(currentK / factorials[i]);
    result.push(available.splice(index, 1)[0]);
    currentK %= factorials[i];
  }

  return result;
}
```

### 회고

수학적 개념이 들어가는 문제는 이해도 못할 정도로 어려운듯 하다...
