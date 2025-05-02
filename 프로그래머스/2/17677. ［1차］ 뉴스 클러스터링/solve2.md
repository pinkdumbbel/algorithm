### 풀이 결과

품

### 내 풀이 방법

주어진 문자열 2개를 자카드 유사도에 따라 2개의 집합으로 만들고
두 집합을 비교하며 겹치는것중 작은 개수는 교집합 겹치는 것중 큰 개수 + 남은 원소의 수 는 합집합
으로 구함

### 내 풀이 코드

```js
function solution(str1, str2) {
  const set1 = createSet(str1);
  const set2 = createSet(str2);

  const intersection = Object.keys(set1).reduce((acc, key) => {
    if (!set2[key]) return acc;
    acc += Math.min(set1[key], set2[key]);
    return acc;
  }, 0);

  const union = Object.keys({ ...set1, ...set2 }).reduce((acc, key) => {
    acc += Math.max(set1[key] ?? 0, set2[key] ?? 0);
    return acc;
  }, 0);

  if (!intersection && !union) return 65536;

  return Math.floor((intersection / union) * 65536);
}

const createSet = (str) =>
  str
    .toLowerCase()
    .split("")
    .map((_, i, arr) => arr.slice(i, i + 2))
    .map((str) => str.join(""))
    .filter((str) => (str.match(/[a-z]/g) ?? []).length === 2)
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] ?? 0) + 1;
      return acc;
    }, {});
```

### 다른 풀이 방법

내 풀이와 동일

### 다른 풀이 코드

```js

```

### 회고
