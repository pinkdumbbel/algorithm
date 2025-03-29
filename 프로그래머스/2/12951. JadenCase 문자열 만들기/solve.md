### 풀이 결과

품

### 내 풀이 방법

문자열을 공백 기준으로 배열로 변환
순회하며 첫 문자열은 대문자 나머지 문자열은 소문자 맵핑
다시 문자열 합침

### 다른 풀이 코드

```js
function solution(s) {
  return s
    .split(" ")
    .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
}
```

### 회고

그냥 쉬운 문제였다.
