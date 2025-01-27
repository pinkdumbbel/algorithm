### 풀이 결과

품

### 내가 생각한 방법

1. 입력된 값을 k진수로 변환 한다.
2. 변환된 값을 0으로 나눈다.
3. 0으로 나눈 배열을 순회한다.
4. 순회하면서 소수인 경우에 대해 필터링 한다.

### 내 코드

```js
function solution(n, k) {
  var answer = 0;
  const arr = n.toString(k).split("0");

  arr.forEach((n) => {
    if (!n || n === "1") return;

    if (isPrime(n)) {
      answer++;
    }
  });

  return answer;
}

const isPrime = (s) => {
  const n = Number(s);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};
```

### 다른 풀이 방법

내 풀이와 동일

### 다른 풀이 코드

```js
function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .map(Number)
    .filter((n) => isPrime(n)).length;
}

const isPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};
```

### 회고

이 문제는 많이 쉬웠다...
오히려 함정이 있나 싶을 정도였다. 이렇게 쉬운 문제들은 좀 명령형으로 말고 선언적으로 코드를 깔끔하게 하는 부분도 신경쓰면 좋을듯 하다.
