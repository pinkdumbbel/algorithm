### 풀이 결과

품

### 내가 생각한 방법

1. 스택 자료구조로 처리
2. 완성된 괄호를 hash로 저장 ex. {')': '('}
3. s만큼 2중 반복으로 순회
   1. 올바른 괄호인지 판별하는 flag변수 선언 (열린 괄호 및 닫힌 괄호만 있는 경우를 판별하기 위해)
   2. 열린 괄호인 경우(!hash[s])stack에 push한다.
   3. 닫힌 괄호인 경우(hash[s])stack의 마지막 값과 비교 하여 정상적인 괄호인지 판단하고 아니면 break로 빠져 나온다.
   4. 위 과정이 끝난 후 flag===true && stack의 length가 0 이면 answer를 하나 증가시킨다.
   5. 문자열의 첫번째 값을 뒤로 이어 붙인다.

### 다른 풀이 방법

기본적인 풀이는 비슷 하나 코드적으로 아래와 같이 다른 차이가 있음

- 문자열이 닫힌 괄호인 경우 무조건 pop을하고 그 값이 맵핑된 열린 괄호인지 판별해서 아니면 break를 함

### 다른 풀이 코드

```javascript
function solution(s) {
  if (s.length % 2 === 1) return 0;

  let answer = 0;
  const mapping = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{")
        stack.push(rotate[j]);
      else {
        const last = stack.pop();
        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }

  return answer;
}
```

### 회고

항상 stack문제가 나오면 맨마지막 값과 비교해서 pop을 했는데 일단 pop을 한 이후 그 값으로 처리하는 방법도 알아두면 좋을거 같다.
