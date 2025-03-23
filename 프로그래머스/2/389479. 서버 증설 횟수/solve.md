### 풀이 결과

품

### 내가 생각한 방법

1. 현재시간의 플레이어 수를 서버를 증설해야하는 최소 수만큼 나눈다.
2. 1번의 값에서 현재 증설된 서버를 빼서 현시점 기준 증설해야 하는 서버 수를 구한다.
3. 증설해야 하는 서버 수가 있으면 현재 시간 부터 ~ 현재 시간 + k 만큼 서버 수를 누적한다.
4. answer에 서버 수만큼 누적한다.

### 다른 풀이 코드

```js
function solution(players, m, k) {
  let answer = 0;
  const n = players.length;
  const servers = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const p = players[i];
    const server = parseInt(p / m) - servers[i];

    if (server > 0) {
      for (let j = i; j < i + k; j++) {
        servers[j] += server;
      }

      answer += server;
    }
  }

  return answer;
}
```

### 회고

최근에 나온 문제여서 그런지 문제가 쉬운편이였다.
다른 풀이를 봐도 다 비슷비슷 하게 풀어 크게 참고할만한 코드는 없어 보인다.
