### 풀이 결과

품

### 내 풀이 방법

n을 스냅샷 뜬 후
무한히 루프를 돌며
n을 증가해주고
n을 2진수 변환한 문자열에서 0을 제거한 후 스냅샷 뜬 문자열 길이와 같은지 비교

### 내 풀이 코드

```js
function solution(n) {
  var answer = 0;
  const tmp = n;

  while (true) {
    n++;
    if (
      n.toString(2).replace(/0/g, "").length ===
      tmp.toString(2).replace(/0/g, "").length
    ) {
      return n;
    }
  }

  return answer;
}
```

### 다른 풀이 방법

기본적으로 접근 방법은 비슷한데 재귀로 풀었다.

### 다른 풀이 코드

```js
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
```

### 회고

문제가 어렵지 않아 쉽게 풀 수 있었다.
