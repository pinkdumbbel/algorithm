### 풀이 결과

못품

### 내 풀이 방법

1부터 n까지 순회하며 값을 누적한다.
sum == n면 answer 증가
sum > n 이면 1부터 빼주기

### 내 풀이 코드

```js
function solution(n) {
  let answer = 1;
  const len = Math.ceil(n / 2);
  let sum = 0;

  for (let i = 1; i <= len; i++) {
    sum += i;

    if (sum == n) answer++;
    else if (sum > n) {
      for (let j = 1; j <= i; j++) {
        sum -= i;

        if (sum == n) {
          answer++;
          break;
        }
      }

      sum = 0;
    }
  }

  return answer;
}
```

### 다른 풀이 방법

투 포인터로 접근
rt가 증가하면서 sum을 누적
sum이 n보다 크면 sum에서 lt를 증가하면서 빼기
sum == n이면 answer 증가

### 다른 풀이 코드

```js
function solution(n) {
  let answer = 0,
    sum = 0,
    lt = 1;

  for (let rt = 1; rt <= n; rt++) {
    sum += rt;

    while (sum > n) {
      sum -= lt++;
    }

    if (sum == n) answer++;
  }

  return answer;
}
```

```js
function solution(n) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;
}
```

### 회고

뭔가 답하고 접근은 비슷하게 했는데 못풀었다...
처음엔 일반적인 루프로 풀어보다가 안풀려서 순열과 비슷해서 재귀로 도전해 봤지만 안풀렸다...
결국 투포인터가 정답이였고 누적후에 값이 n보다 커졌을때 1부터 제거하는 로직은 비슷했는데 디테일한 접근이 아쉬웠다...
