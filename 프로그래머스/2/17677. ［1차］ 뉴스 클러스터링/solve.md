### 풀이 결과

못품...

### 다른 풀이 방법

- 요건에 맞게 두개의 글자로 자른 집합을 만들고
- 집합을 순회하며 각 문자가 집합에 몇개 있는지 카운팅 한다.
- 교집합/합집합 을 구한다.

### 다른 풀이 코드

```javascript
function solution(str1, str2) {
  const set1 = createSet(str1);
  const set2 = createSet(str2);

  const counter1 = set1.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const counter2 = set2.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const intersection = Object.keys(counter1).reduce((acc, key) => {
    if (counter2[key]) {
      acc += Math.min(counter1[key], counter2[key]);
    }
    return acc;
  }, 0);

  const union = Object.keys({ ...counter1, ...counter2 }).reduce((acc, key) => {
    acc += Math.max(counter1[key] || 0, counter2[key] || 0);
    return acc;
  }, 0);

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

const createSet = (str) =>
  str
    .toLowerCase()
    .split("")
    .slice(0, -1)
    .map((char, idx) => {
      const pair = str.toLowerCase().slice(idx, idx + 2);
      return /^[a-z]{2}$/.test(pair) ? pair : null;
    })
    .filter(Boolean);
```

### 회고

이 문제를 풀면서 교집합 / 합집합을 구하는 방법에 대해 알게 되었다.
내가 문제를 접근 했을때는 교집합은 구하기 쉬웠으나 합집합이 어려웠는데

교집합 수의 경우에는 두 집합에 대해 겹치는 원소의 개수가 더 적은 값을 누적 하면 되고
합집합 수의 경우에는 두 집합에 대해 모든 원소를 탐색하며 겹치는 원소가 존재 한다면 둘중 더 큰 값을 누적 하면 된다.

근데 문제들을 풀면 풀수록 뭔가 수학적 개념을 잘 알고 있으면 확실하게 도움이 되는듯 하다...
나는 교집합을 생각 했을때 겹치는 원소는 무조건 하나로 퉁 쳤는데 그게 아니였다...
이렇게 집합에 대해서도 하나 배우고 간다...
