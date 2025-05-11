### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(arr) {
  const answer = [0, 0];

  const recur = (x, y, len) => {
    let same = true;
    const v = arr[y][x];

    for (let i = y; i < y + len; i++) {
      for (let j = x; j < x + len; j++) {
        if (v !== arr[i][j]) {
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    if (same) {
      answer[v]++;
    } else {
      const newLen = len / 2;
      //왼쪽 위
      recur(x, y, newLen);
      //오른쪽 위
      recur(x + newLen, y, newLen);
      //왼쪽 아래
      recur(x, y + newLen, newLen);
      //오른쪽 아래
      recur(x + newLen, y + newLen, newLen);
    }
  };

  recur(0, 0, arr.length);

  return answer;
}
```

### 회고

재귀로 접근해야 한다는 기억이 있는데도 못풀었다...
재귀를 좀 이해하고 싶은데 참 어렵다...
