### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

1. 정답이 될수 있는 비율을 담은 배열을 선언한다.
2. 순회하면서 각 무게에 비율을 곱해서 map에 존재한다면 그 값을 answer에 누적한다.
3. 각 무게별 등장 회수를 맵에 저장한다.

### 다른 풀이 코드

```js
function solution(weights) {
  let answer = 0;
  const map = new Map();
  const ratios = [1, 2 / 3, 2 / 4, 3 / 2, 3 / 4, 4 / 2, 4 / 3];

  for (const w of weights) {
    for (const r of ratios) {
      const target = w * r;
      if (map.has(target)) answer += map.get(target);
    }

    map.set(w, (map.get(w) ?? 0) + 1);
  }

  return answer;
}
```

### 회고

이렇게 비율로 접근해야 한다는 생각 조차 못했다.
다음에 다시 풀어 봐야겠다.
