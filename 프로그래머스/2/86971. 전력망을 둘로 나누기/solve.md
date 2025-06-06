### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

1. 각 노드별 인접한 노드를 구한다.
2. wires 순회 시작
   1. 경로를 탐색할 visited를 선언
   2. visited와 큐에 첫번째 전선을 추가
   3. while 순회
      1. queue의 원소를 갖고 해당 값에 해당하는 인접 노드를 순회한다.
         1. 노드의 값이 두번째 전선과 같으면 건너뛴다
            - 이 부분이 끊어진 전선을 방문하지 않는 경우이다.
         2. 노드의 값이 방문되지 않은 경우에
            1. 방문 처리를 해주고
            2. 큐에 노드를 push해준다.
               - 이 부분으로 인해 노드가 연결되어 있는 모든 경로를 탐색한다.
            3. 방문을 한번 할때마다 cnt를 증가 시킨다.
   4. answer에 나눠진 전선망수중에 차이가 작은 값으로 변경한다.

### 다른 풀이 코드

```js
function solution(n, wires) {
  let answer = n;
  const map = new Map();

  wires.forEach(([a, b]) => {
    map.set(a, [...(map.get(a) ?? []), b]);
    map.set(b, [...(map.get(b) ?? []), a]);
  });

  for (const [a, b] of wires) {
    const visited = new Set();
    visited.add(a);
    const queue = [a];
    let cnt = 1;

    while (queue.length) {
      const current = queue.shift();
      for (const w of map.get(current)) {
        if (w === b) continue;
        if (!visited.has(w)) {
          visited.add(w);
          queue.push(w);
          cnt++;
        }
      }
    }

    const diff = Math.abs(cnt - (n - cnt));
    answer = Math.min(answer, diff);
  }

  return answer;
}
```

### 회고

어느정도 접근은 했었는데 인접한 노드를 방문한 후에 연결된 노드를 계속 타고타고 방문하는 로직을 작성하기 어려워서 포기 했었는데
GPT코드를 보니 queue에다가 값을 저장해 놓고 인접 노드를 모두 탐색하는 방식으로 구현했는데 좋은 방법인거 같다.
