### 풀이 결과

못품

### 내가 작성한 코드

```javascript
function solution(clothes) {
  const hash = {};

  clothes.forEach(([_, type]) => {
    if (hash[type]) {
      hash[type]++;
    } else {
      hash[type] = 1;
    }
  });

  return Object.values(hash).reduce((a, b) => a + a * b, 1) - 1;
}
```

### 다른 풀이 코드

### 회고

풀긴 풀었는데 야매로 풀었다... 그래서 못품으로 처리 했다. 좀더 이해하고 다시 풀어봐야겠다.
