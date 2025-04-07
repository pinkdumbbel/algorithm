### 풀이 결과

품

### 내 풀이 방법

1. 순환구조를 만들기 위해 배열을 한번 더 이어 붙인다.
2. 순회하며 배열을 자르고 그 합을 구한다.
3. 값을 set에 저장한다.

### 내 풀이 코드

```js
function solution(elements) {
  const set = new Set();
  const len = elements.length;
  elements = elements.concat(elements);

  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= len; j++) {
      const sum = elements.slice(i, i + j).reduce((a, b) => a + b, 0);
      set.add(sum);
    }
  }

  return set.size;
}
```

### 다른 풀이 방법

기본적인 접근 방법은 똑같다.
하지만 요소들의 합을 구하는 방법이 다르다.
내 풀이보다 훨씬 빠르고 좋은 풀이다.

### 다른 풀이 코드

```js
function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
```

### 회고
