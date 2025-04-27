### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(priorities, location) {
  const queue = priorities.map((p, i) => ({
    index: i,
    priority: p,
  }));

  let cnt = 1;

  while (true) {
    for (let i = 0; i < queue.length; i++) {
      if (!queue[i]) continue;

      const { index, priority } = queue[i];

      if (!queue.some((q) => q && q.priority > priority)) {
        if (location === i) return cnt;
        queue[i] = null;
        cnt++;
      }
    }
  }
}
```

### 다른 풀이 방법

내 풀이와 동일하다 하지만 다른점은
나는 우선순위가 높은 작업이 존재하면 해당 인덱스의 값을 null로 처리해서 지워버렸다
반면 다른 풀이는 우선순위가 높은 작업이 있으며 그 뒤로 이어붙이는 방식으로 풀었다.

### 다른 풀이 코드

```js
function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ priority, index }));
  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      count++;
      if (current.index === location) {
        return count;
      }
    }
  }
}
```

### 회고
