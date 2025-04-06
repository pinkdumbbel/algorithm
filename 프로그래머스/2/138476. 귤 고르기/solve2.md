### 풀이 결과

품

### 내 풀이 방법

1. 각 귤의 크기마다 갯수를 map에 저장한다.
2. 저장된 map의 values를 내림차순 정렬한다.
3. 정렬된 values를 순회하면서 값을 누적한다.
4. 누적 할 때 마다 answer를 하나씩 증가 시켜주고 누적한 값이 k보다 크거나 같아지는 순간에 answer를 리턴핝다.

### 내 풀이 코드

```js
function solution(k, tangerine) {
  let answer = 0;
  const map = new Map();

  tangerine.forEach((t) => {
    map.set(t, map.get(t) ? map.get(t) + 1 : 1);
  });

  let sum = 0;
  for (const v of [...map.values()].sort((a, b) => b - a)) {
    sum += v;
    answer++;
    if (sum >= k) return answer;
  }

  return answer;
}
```

### 다른 풀이 방법

내 풀이와 크게 다르지 않음

### 다른 풀이 코드

```js

```

### 회고

이 문제는 기존에도 풀었었던 문제 였는데 푸는데 20분정도 걸린거 보니 확실히 늘긴한거 같아 뿌듯하다...
