### 풀이 결과

품

### 내 풀이 방법

문자열을 배열로 변경
문자열을 모두 number으로 맵핑
오름차순 정렬
첫번째 와 마지막 엘리먼트 만 필터
문자열로 변환

### 내 풀이 코드

```js
function solution(s) {
  return s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .filter((_, i, arr) => !i || i === arr.length - 1)
    .join(" ");
}
```

### 다른 풀이 코드

```js
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
```

### 회고

음 그냥 쉬운 문제였다
다른풀이 코드가 더 코드량이 짧고 해볼만 한거 같다.
