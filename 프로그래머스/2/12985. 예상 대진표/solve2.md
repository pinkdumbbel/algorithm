### 풀이 결과

품

### 내 풀이 방법

1. 순회를 하며 a와 b를 2로 나눈값으로 할당한다.
2. 순회 할 때 마다 answer를 증가한다.
3. a와 b가 같으면 answer를 리턴한다.

### 내 풀이 코드

```js
function solution(n, a, b) {
  let answer = 0;

  while (a >= 1 || b >= 1) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer++;

    if (a === b) return answer;
  }

  return answer;
}
```

### 다른 풀이 방법

기본적인 접근은 같은데 while문의 조건이 다름

### 다른 풀이 코드

```js
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer++;
  }

  return answer;
}
```

### 회고
