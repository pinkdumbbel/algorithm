### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

그냥 두 문자를 더해서 비교하면 끝이였다...

### 다른 풀이 코드

```js
function solution(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join("");

  return Number(answer[0]) > 0 ? answer : "0";
}
```

### 회고

정렬 문제도 약한듯 하다...
