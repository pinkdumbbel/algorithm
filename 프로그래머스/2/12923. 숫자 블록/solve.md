### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

최대 블록은 end/2와 10000000을 비교해서 더 작은값

1 ~ 최대블록 순회
블록을 놓을 첫 지점을 n\*2와 begin이상의 n의 배수와 비교하여 더 작은값로 한다.
순회 하면서 값을 할당한다.

### 다른 풀이 코드

```js
function solution(begin, end) {
  const result = new Array(end - begin + 1).fill(0);

  const maxBlock = Math.min(Math.floor(end / 2), 10000000);

  for (let n = 1; n <= maxBlock; n++) {
    let start = Math.max(n * 2, Math.ceil(begin / n) * n);

    for (let pos = start; pos <= end; pos += n) {
      if (pos >= begin) result[pos - begin] = n;
    }
  }

  return result;
}
```

### 회고
