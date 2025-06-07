### 풀이 결과

품

### 내 풀이 방법

두 배열에서 최대 공약수를 각각 구하고
그 최대공약수 값이 상대 배열과 나누어 떨어지는지 확인 후 답 리턴

### 내 풀이 코드

```js

```

### 다른 풀이 방법

내 풀이와 동일하다
다만 최대 공약수를 구하는 부분과 모두 나누어 떨어지지 않는 조건을 every와 some을 통해 처리 하였다.

### 다른 풀이 코드

```js
function solution(arrayA, arrayB) {
  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getAnswer(A, B) {
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}
```

### 회고

some과 every를 생각한건 아니지만 저렇게 되면 루프가 두번 돌아서 타임아웃이 날듯 했는데 아니였다.
입력값이 500,000 정도 되면 모든 케이스는 아니더라도 2중반복을 사용해도 될듯 하다.
