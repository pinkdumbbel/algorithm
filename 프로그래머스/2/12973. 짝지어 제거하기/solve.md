### 풀이 결과

품

### 내 풀이 방법

1. 스택 선언
2. 문자열 순회
3. 스택의 마지막 값과 현재 문자가 같은면 pop 아니면 push
4. stack의 길이가 있으면 0 아니면 1 리턴

### 내 풀이 코드

```js
function solution(s) {
  const stack = [];

  for (const c of s) {
    if (stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return Number(!stack.length);
}
```

### 회고
