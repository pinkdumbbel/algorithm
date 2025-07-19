### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

이진 탐색으로 풀이

### 다른 풀이 코드

```js
function solution(diffs, times, limit) {
  function calculateTime(level) {
    let totalTime = 0;
    let timePrev = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const timeCur = times[i];

      if (diff <= level) {
        totalTime += timeCur;
      } else {
        const mistakes = diff - level;
        totalTime += mistakes * (timeCur + timePrev) + timeCur;
      }

      timePrev = timeCur;

      if (totalTime > limit) return totalTime;
    }

    return totalTime;
  }

  let left = 1;
  let right = [...diffs].sort((a, b) => b - a)[0];
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (calculateTime(mid) <= limit) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
```

### 회고

프로그래머스 풀면서 이진탐색 문제는 처음 풀어본듯 한데 그래서 그런가 풀지 못했다
근데 사실 이진탐색으로 풀면 될거같은데 라는 생각이 들긴 했다.
