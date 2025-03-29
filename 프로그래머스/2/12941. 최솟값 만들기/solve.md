### 풀이 결과

품

### 내 풀이 방법

배열1은 오름차순 정렬
배열2는 내림차순 정렬
각 인덱스 순서대로 곱하면서 누적

### 내 풀이 코드

```js
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((a, b, i) => a + b * B[i], 0);
}
```

### 회고

생각 할 필요가 크게 없는 쉬운 문제였다.
