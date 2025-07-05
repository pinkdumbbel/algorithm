### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

숫자와 연산자를 분리하여 배열에 저장한다.
우선순위에 따라 계산하면서 배열을 변경한다.
계속 계산 하면서 절대값이 큰 값을 answer로 할당한다.

### 다른 풀이 코드

```js
function solution(expression) {
  let answer = -Infinity;

  const priorities = [
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  const nums = [];
  const ops = [];

  let str = "";
  for (const char of expression) {
    if (priorities[0].includes(char)) {
      nums.push(Number(str));
      ops.push(char);
      str = "";
    } else {
      str += char;
    }
  }
  nums.push(Number(str));

  const calculate = (nums, ops, priority) => {
    const tmpNums = [...nums];
    const tmpOps = [...ops];

    for (const op of priority) {
      let i = 0;
      while (i < tmpOps.length) {
        if (tmpOps[i] === op) {
          let result;

          if (op === "+") {
            result = tmpNums[i] + tmpNums[i + 1];
          } else if (op === "-") {
            result = tmpNums[i] - tmpNums[i + 1];
          } else if (op === "*") {
            result = tmpNums[i] * tmpNums[i + 1];
          }

          tmpNums.splice(i, 2, result);
          tmpOps.splice(i, 1);
        } else {
          i++;
        }
      }
    }

    return tmpNums[0];
  };

  for (const priority of priorities) {
    const result = calculate(nums, ops, priority);
    answer = Math.max(answer, Math.abs(result));
  }

  return answer;
}
```

### 회고
