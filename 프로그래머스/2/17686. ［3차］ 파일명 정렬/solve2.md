### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(files) {
  return files.sort((a, b) => {
    const [, headA, numberA] = a.match(/^(\D+)(\d+)/i);
    const [, headB, numberB] = b.match(/^(\D+)(\d+)/i);

    const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());

    if (headCompare !== 0) return headCompare;

    return parseInt(numberA) - parseInt(numberB);
  });
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

이 문제는 문자열을 잘 나누고 정렬을 어떻게 하는지 푸는 문제였다.
정규식 문제도 진짜 당황스럽다...
그래도 localeCompare메서드가 문자열 비교를 해준다는것을 새로 알게되어 다음에 써먹으면 될듯 하다.
