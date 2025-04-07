### 풀이 결과

품 (힌트를 얻어서)

### 내 풀이 방법

1. 주어진 배열에서 가장 큰 값을 찾는다.
2. 큰값\*(2~n)을 해서 모두 나누어 지면 그때 그 값을 리턴한다.

### 내 풀이 코드

```js
function solution(arr) {
  let answer = 0;
  const max = Math.max(...arr);
  let n = 2;

  while (true) {
    let flag = true;
    answer = max * n;

    arr.forEach((el) => {
      if (!flag) return;
      if (answer % el !== 0) flag = false;
    });

    if (flag) return answer;
    n++;
  }

  return answer;
}
```

### 다른 풀이 방법

1. 두수의 최소 공배수를 구한다.
2. 구해진 공배수와 다음 요소의 공배수를 구한다.

   - arr = [2,6,8,14]
   - lcm(2,6) => 6
   - lcm(lcm(2,6),8) => lcm(6,8) => 24
   - lcm(lcm(lcm(2,6),8), 14) => lcm(24, 14) => 168

3. 1,2 과정을 반복한다.

### 다른 풀이 코드

```js
function solution(arr) {
  function lcm(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let result = max;

    while (result % min !== 0) {
      result += max;
    }

    return result;
  }

  return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}
```

### 회고

확실히 수학적으로 접근해야 하는 알고리즘과 DP및 재귀에 많이 약한듯 하다.
만약 코테를 볼때 다른 풀이 방법으로 풀 수 있을까 싶기도 하다...
