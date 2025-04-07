### 풀이 결과

품

### 내 풀이 방법

1. 닫힌괄호에 해당하는 문자열을 hash형태로 저장한다.
2. 현재 순회중인 배열이 올바른 괄호인지 체크한다.
3. 올바른 괄호이면 answer를 증가한다.
4. 괄호를 왼쪽으로 이동한다.

### 내 풀이 코드

```js
function solution(s) {
  let answer = 0;
  const arr = s.split("");
  const hash = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const isBraket = (arr) => {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      const braket = arr[i];

      if (!hash[braket]) {
        stack.push(braket);
      } else {
        if (stack[stack.length - 1] === hash[braket]) stack.pop();
        else return false;
      }
    }

    return !stack.length;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isBraket(arr)) answer++;
    arr.push(arr.shift());
  }

  return answer;
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고
