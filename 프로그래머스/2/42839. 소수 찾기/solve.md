### 풀이 결과

못품

### 다른 풀이 코드

```javascript
function solution(numbers) {
  const n = numbers.length;
  const set = new Set();
  const chk = Array(n).fill(false);

  const isPrime = (n) => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }

    return true;
  };

  function dfs(permutations) {
    if (permutations.length) {
      set.add(Number(permutations.join("")));
    }

    for (let i = 0; i < n; i++) {
      if (!chk[i]) {
        chk[i] = true;
        dfs([...permutations, numbers[i]]);
        chk[i] = false;
      }
    }
  }

  dfs([]);

  return [...set].filter(isPrime).length;
}
```

### 회고

이 문제는 순열이라는 것을 파악 했지만
역시 문제를 풀지는 못했다. 재귀가 너무 익숙하지 않다 그래도 이번 기회에 중복되지 않은 순열에 대해서 어떻게 처리 해야 될지 어느정도는 감을 익힌듯 하다. 순열(중복X)은 체크 로직이 중요한데 체크가 되어 있을때만 재귀를 실행하면 될듯 하다.
