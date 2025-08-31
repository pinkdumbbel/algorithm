### 풀이 결과

품

### 내 풀이 방법

bfs로 해결

### 내 풀이 코드

```js
function solution(cards) {
  const n = cards.length;
  const check = Array(n).fill(false);
  cards = cards.map((n) => n - 1);

  const bfs = (n) => {
    let cnt = 1;
    const queue = [n];

    while (queue.length) {
      const card = queue.shift();

      if (check[card]) return cnt;

      check[card] = true;
      queue.push(cards[card]);
      cnt++;
    }

    return cnt;
  };

  const result = [];

  cards.forEach((n, i) => {
    check[i] = true;
    result.push(bfs(n));
  });

  result.sort((a, b) => b - a);

  if (result[0] === n) return 0;

  return result[0] * result[1];
}
```

### 다른 풀이 방법

단순 탐색으로 해결

### 다른 풀이 코드

```js
function solution(cards) {
  const n = cards.length;
  const visited = Array(n).fill(false);
  const groups = [];

  cards = cards.map((n) => n - 1);

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let current = i;
    let group = 0;

    while (!visited[current]) {
      visited[current] = true;
      current = cards[current];
      group++;
    }

    groups.push(group);
  }

  groups.sort((a, b) => b - a);

  if (groups.length < 2) return 0;

  return groups[0] * groups[1];
}
```

### 회고
