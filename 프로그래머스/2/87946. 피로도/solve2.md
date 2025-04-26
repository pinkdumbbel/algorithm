### 풀이 결과

못품...(80% 정도 접근)

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(k, dungeons) {
  let answer = 0;

  const n = dungeons.length;
  const chk = Array(n).fill(false);

  const recur = (hp, cnt) => {
    answer = Math.max(cnt, answer);

    for (let i = 0; i < n; i++) {
      if (!chk[i] && dungeons[i][0] <= hp) {
        chk[i] = true;
        recur(hp - dungeons[i][1], cnt + 1);
        chk[i] = false;
      }
    }
  };

  recur(k, 0);

  return answer;
}
```

### 다른 풀이 방법

내 코드와 동일

### 다른 풀이 코드

```js

```

### 회고

자꾸 재귀문제만 나오면 if / else로 종료조건을 만드려고 하는 습관이 있다
이 문제를 접근했을때도 재귀로 풀어야 겠다는 생각이 들었고 순열처럼 풀면되겠다 까지도 접근했는데
종료조건을 어떻게 해야할지 고민하다 결국 못풀었다. 단순히 체크안되어 있고 현재 hp가 지금 순회중인 던전 최소 피로도 보다 작거나 같기만 하면되는데... 아쉬운 문제였다...
