### 풀이 결과

품

### 내 풀이 방법

각 집합 요소를 배열로 변환 한 후 중복을 제거

### 내 풀이 코드

```js
function solution(s) {
  const set = new Set();

  s.replace("{{", "")
    .replace("}}", "")
    .split("},{")
    .map((s) => s.split(","))
    .sort((a, b) => a.length - b.length)
    .flat()
    .map(Number)
    .forEach((s) => set.add(s));

  return [...set];
}
```

### 다른 풀이 방법

내 풀이와 동일

### 다른 풀이 코드

```js
function solution(s) {
  return s
    .slice(2, -2)
    .split("},{")
    .map((s) => s.split(","))
    .sort((a, b) => a.length - b.length)
    .reduce(
      (acc, cur) => [...acc, ...cur.filter((el) => !acc.includes(el))],
      []
    )
    .map(Number);
}
```

### 회고

다른 풀이가 좀 더 함수형 스럽고 코드가 예쁜거 같다
