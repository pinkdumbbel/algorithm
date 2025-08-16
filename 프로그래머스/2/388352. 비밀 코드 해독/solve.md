### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(n, q, ans) {
  let answer = 0;
  const len = 5;
  const checked = Array.from({ length: len }, () => false);
  const combis = [];

  const getCombis = (L = 0, arr = []) => {
    if (L === len) {
      if (isSorted(arr)) combis.push(arr);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!checked[i]) {
        checked[i] = true;
        getCombis(L + 1, [...arr, i + 1]);
        checked[i] = false;
      }
    }
  };

  getCombis();

  for (const combi of combis) {
    let flag = true;

    for (let i = 0; i < q.length; i++) {
      const inputs = q[i];
      const cnt = ans[i];

      if (combi.filter((c) => inputs.includes(c)).length !== cnt) {
        flag = false;
        break;
      }
    }

    if (flag) answer++;
  }

  return answer;
}

const isSorted = (arr) => {
  let prev = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (prev > arr[i]) return false;
    prev = arr[i];
  }

  return true;
};
```

### 다른 풀이 방법

기본적으로 DFS를 통해 접근하여 모든 경우의수를 구하는 방식은 동일
하지만 나는 각 arr마다 정렬이 되어 있는지 모두 체크했고
다른 코드는 인덱스 자체를 1씩 증가시켜서 처리해서 알아서 정렬이 되도록 처리했다.
성능상 훨씬 좋은 코드다.

### 다른 풀이 코드

```js
function solution(n, q, ans) {
  let answer = 0;
  const len = 5;

  const getCombis = () => {
    const combis = [];

    const dfs = (L = 0, arr = []) => {
      if (arr.length === len) {
        combis.push(arr);
        return;
      }

      for (let i = L; i < n; i++) {
        dfs(i + 1, [...arr, i + 1]);
      }
    };

    dfs();

    return combis;
  };

  for (const combi of getCombis()) {
    let flag = true;

    for (let i = 0; i < q.length; i++) {
      const inputs = q[i];
      const cnt = ans[i];

      if (combi.filter((c) => inputs.includes(c)).length !== cnt) {
        flag = false;
        break;
      }
    }

    if (flag) answer++;
  }

  return answer;
}
```

### 회고

DFS로 문제를 풀 때 반드시 오름차순이 되어야 하는 경우에 어떻게 접근하면 되는지 알았고 이때 굳이 visitied를 체크하지 않아도 된다는 것을 알았다.
