### 풀이 결과

품

### 내가 생각한 방법

1. 각 귤의 크기마다 갯수를 map에 저장한다.
2. 저장된 map의 values를 내림차순 정렬한다.
3. 정렬된 values를 순회하면서 값을 누적한다.
4. 누적 할 때 마다 answer를 하나씩 증가 시켜주고 누적한 값이 k보다 크거나 같아지는 순간에 answer를 리턴핝다.

### 내가 작성한 코드

```javascript
function solution(k, tangerine) {
  const map = new Map();

  tangerine.forEach((t) => {
    map.set(t, (map.get(t) ?? 0) + 1);
  });

  const sortedValues = [...map.values()].sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;

  for (const v of sortedValues) {
    sum += v;
    answer++;
    if (sum >= k) return answer;
  }

  return answer;
}
```

### 다른 풀이 방법

여러가지의 풀이를 보았지만 대개 내가 생각한 방법 대로 해결

### 정답 코드

```javascript
function solution(k, tangerine) {
  const map = new Map();

  tangerine.forEach((t) => {
    map.set(t, (map.get(t) ?? 0) + 1);
  });

  const sortedValues = [...map.values()].sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;

  for (const v of sortedValues) {
    sum += v;
    answer++;
    if (sum >= k) return answer;
  }

  return answer;
}
```

### 회고

처음엔 크기별로 분류하여 해결하려고 했었는데
문제를 계속 보니 크기는 별로 중요하지 않았고 크기별 갯수가 중요하다는 것을 깨달았다.
이런 류의 구현 문제는 계속 연습해야 겠다.
