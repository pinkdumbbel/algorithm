### 풀이 결과

품

### 내 풀이 방법

스택으로 풀이
스택내에 요소가 존재하면서 현재 순회중인 요소가 닫는 괄호일때 stack.pop
아닐때 stack.push();
stack의 길이가 없으면 올바른 괄호 아니면 아님

### 내 풀이 코드

```js
function solution(s) {
  const stack = [];

  s.split("").forEach((el) => {
    if (stack.length && el === ")") {
      stack.pop();
    } else {
      stack.push(el);
    }
  });

  return !stack.length;
}
```

### 회고

스택자료구조 문제의 전형적인 문제인 괄호 문제였다.
처음에 접근할때 while을 무조건 써야한다고 생각해서 조금 시간이 걸렸는데
항상 느끼지만 뭔가 어떤 자료구조를 사용 할 때에는 꼭 이런 방법을 써야지 하는 강박? 같은게 있는듯 하다.
