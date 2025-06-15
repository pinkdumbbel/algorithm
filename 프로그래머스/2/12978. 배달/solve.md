### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

- total은 중복 된 간선 제외 및 최소 거리만 누적 하는 역할을 함
- map은 각 노드가 어떤 노드와 연결되어 있는지 저장
- queue에 1번 노드에 대한 정보 저장 및 1번 노드 방문 비용을 초기화 함
- bfs순회 1번 노드와 이어진 노드들을 모두 탐색하면서 거리를 모두 누적함
- total에서 K보다 작거나 같은 값의 원소의 개수가 답

### 다른 풀이 코드

```js
function solution(N, road, K) {
  const total = Array.from({ length: N + 1 }, () => Infinity);
  const map = new Map();

  road.forEach(([a, b, c]) => {
    map.set(a, [...(map.get(a) ?? []), { to: b, dist: c }]);
    map.set(b, [...(map.get(b) ?? []), { to: a, dist: c }]);
  });

  const queue = [{ to: 1, dist: 0 }];
  total[1] = 0;

  while (queue.length) {
    const { to, dist } = queue.pop();

    for (const node of map.get(to)) {
      if (total[node.to] > total[to] + node.dist) {
        total[node.to] = total[to] + node.dist;
        queue.push(node);
      }
    }
  }

  return total.filter((v) => v <= K).length;
}
```

### 회고
