### 풀이 결과

품

### 내 풀이 방법

문자열을 2진변환한 후 0을 제거한다.
문자열의 길이에서 0을 제거한 길이를 뺀다.
문자열을 0을 제거한 길이를 2진변환한 값으로 대체한다.
순회를 한번 할때마다 카운터를 누적하고
0이 제거된 길이만큼 누적해서 리턴한다.

### 내 풀이

```js
function solution(s) {
  let cnt = 0;
  let removed = 0;

  while (s !== "1") {
    const len = s.toString(2).replace(/0/g, "").length;
    const zeros = s.length - len;
    s = len.toString(2);

    cnt++;
    removed += zeros;
  }

  return [cnt, removed];
}
```

### 회고

이 문제도 크게 어렵지 않은 문제였다.
