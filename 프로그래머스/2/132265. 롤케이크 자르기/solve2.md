### 풀이 결과

### 내 풀이 방법

1. 토핑을 순회하며 각 토핑 종류별 개수를 맵으로 저장
2. 토핑을 다시 순회 (자르기)
   - set에 토핑 저장 (왼쪽)
   - map에서 해당 토핑 개수 1차감 (오른쪽)
   - map과 set의 사이즈가 같으면 answer를 증가

### 내 풀이 코드

```js
function solution(topping) {
  let answer = 0;
  const map = new Map();
  const set = new Set();

  topping.forEach((t) => {
    map.set(t, (map.get(t) ?? 0) + 1);
  });

  topping.forEach((t) => {
    set.add(t);
    map.set(t, map.get(t) - 1);
    if (map.get(t) === 0) map.delete(t);

    if (set.size === map.size) answer++;
  });

  return answer;
}
```

### 다른 풀이 방법

내 풀이와 동일

### 다른 풀이 코드

```js

```

### 회고

이 문제는 풀면서 얼추 기억이 났다.
그래도 3개월 전에 푼 문제이지만 속도도 빨라졌고 푼걸 보면 실력이 확실히 늘은듯 하다
