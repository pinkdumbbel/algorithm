### 풀이 결과

못품

### 내 풀이 방법

재귀를 이용하여 푼다.

### 내 풀이 코드

```js
function solution(n) {
  var answer = 0;

  const recur = (n) => {
    if (n === 0 || n === 1) {
      return !n ? 0 : 1;
    }

    return (recur(n - 1) + recur(n - 2)) % 1234567;
  };

  answer = recur(n);

  return answer;
}
```

### 다른 풀이 방법

DP를 이용하여 푼다.

### 다른 풀이 코드

```js
function solution(n) {
  const div = 1234567;
  const memo = [0, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % div;
  }

  return memo[n];
}
```

### 회고

재귀로 풀면 n이 조금만 커져도 효율성 테스트에서 통과를 하지 못한다.
DP로 풀게 되면 O(n)으로 풀 수 있다.
