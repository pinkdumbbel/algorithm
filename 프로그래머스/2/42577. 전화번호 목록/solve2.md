### 풀이 결과

품

### 내 풀이 방법

배열을 사전순으로 정렬 후 이전 값으로 시작하는지 비교

### 내 풀이 코드

```js
function solution(phone_book) {
  return !phone_book
    .sort()
    .some((s, i) => (i ? s.startsWith(phone_book[i - 1]) : false));
}
```

### 다른 풀이 방법

내 풀이와 동일

### 다른 풀이 코드

```js

```

### 회고

이 문제는 해쉬로 되어 있는데 오히려 더 헷갈리는거 같다;
