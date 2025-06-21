### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

우선 orders의 모든 문자열을 사전 기준으로 정렬한 이후에
각 문자열이 가질수 있는 모든 조합의 수를 구한다 (course의 길이 만큼)
문자열 조합을 구했다면 그 조합으로 빈도를 찾고 가장 높은 빈도를 갖는 문자열만 answer에 push한다.

### 다른 풀이 코드

```js
function solution(orders, course) {
  const answer = [];

  orders = orders.map((order) => order.split("").sort().join(""));

  const getCombi = (arr, k) => {
    const result = [];

    const dfs = (start, path) => {
      if (path.length === k) {
        result.push(path.join(""));
        return;
      }
      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        dfs(i + 1, path);
        path.pop();
      }
    };

    dfs(0, []);
    return result;
  };

  for (const len of course) {
    const map = new Map();

    for (const order of orders) {
      const results = getCombi(order, len);

      results.forEach((str) => {
        map.set(str, (map.get(str) ?? 0) + 1);
      });
    }

    const max = Math.max(...[...map.values()]);

    if (max < 2) continue;

    for (const [key, value] of map.entries()) {
      if (max === value) {
        answer.push(key);
      }
    }
  }

  return answer.sort();
}
```

### 회고
