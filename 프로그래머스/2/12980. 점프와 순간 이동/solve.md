### 풀이 결과

품

### 내 풀이 방법

- n>0일때 까지 순회한다.
  - n이 홀수면 answer를 증가한다.(에너지 사용)
  - n을 n/2의 값으로 할당한다.

### 내 풀이 코드

```js
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2) answer++;
    n = parseInt(n / 2);
  }

  return answer;
}
```

### 다른 풀이 방법

n을 이진수로 변환후 1의 개수를 리턴한다.

### 다른 풀이 코드

```js
function solution(n) {
  return n.toString(2).replace(/0/g, "").length;
}
```

### 회고

이진수 변환 후 1의 개수를 리턴하는건 아무리 봐도 모르겠다...
확실히 수학적 접근에 약한듯 하다...
