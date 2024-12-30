### 풀이 결과

못품

### 다른 풀이 코드

```javascript
function solution(k, dungeons) {
  let answer = 0;
  const n = dungeons.length;

  function dfs(hp, visited = new Set(), cnt = 0) {
    answer = Math.max(cnt, answer);

    for (let i = 0; i < n; i++) {
      if (!visited.has(i) && hp >= dungeons[i][0]) {
        visited.add(i);
        dfs(hp - dungeons[i][1], visited, cnt + 1);
        visited.delete(i);
      }
    }
  }

  dfs(k);

  return answer;
}
```

### 회고

처음에 문제를 풀었을때 완전탐색으로 풀기 위해 반복문으로만 풀려고 했었다.
그런데 반복문을 하면 할수록 던전의 개수만큼 반복문을 써야 되는듯 하다는 생각이 들었고
재귀를 사용 해야 되는건가 하고 생각하다 결국 GPT에게 요청을 했다.

어떻게 접근 해야 되는지 힌트를 얻었음에도 풀지 못했고 답을 봤는데
예전에 DFS처음 공부할때 배운 이진트리 탐색 하는것과 비슷했다... 재귀를 공부 한지 하도 오래돼서 다 까먹은듯 하다...
그러면서 백트래킹 이라는 개념도 알게 되었다 결국 탐색중에 이미 탐색한 곳은 체크를 해놓고 넘어갔다가 이전 트리에서 순회할때 다시 탐색하는 과정인 것이다.

코테의 벽은 높디 높다...
