### 풀이 결과

품

### 내 풀이 방법

문자열을 압축하면서 이전 값과 현재 값이 같으면 cnt만 증가 해주고
다르면 이전값에 cnt만큼 프리픽스 해준다.
그 결과를 토대로 문자열 길이를 구해서 answer에 더 작은 값을 할당한다.

### 내 풀이 코드

```js
function solution(s) {
  let answer = Infinity;
  const len = s.length;

  for (let i = 1; i <= len; i++) {
    const stack = [];
    let cnt = 1;

    for (let j = 0; j < len; j += i) {
      const sliced = s.slice(j, j + i);

      if (stack.length) {
        if (stack[stack.length - 1] === sliced) {
          cnt++;
        } else {
          stack[stack.length - 1] = `${cnt === 1 ? "" : cnt}${
            stack[stack.length - 1]
          }`;
          stack.push(sliced);
          cnt = 1;
        }
      } else {
        stack.push(sliced);
      }
    }
    stack[stack.length - 1] = `${cnt === 1 ? "" : cnt}${
      stack[stack.length - 1]
    }`;

    answer = Math.min(answer, stack.join("").length);
  }

  return answer;
}
```

### 다른 풀이 방법

- 순회 회수를 length/2로 제한
- 이전 값 확인 로직에 배열을 쓰지 않고 단순 변수로 확인

### 다른 풀이 코드

```js
function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let str = "";
    let prev = s.slice(0, i);
    let cnt = 1;

    for (let j = i; j < s.length; j += i) {
      const current = s.slice(j, j + i);

      if (prev === current) {
        cnt++;
      } else {
        str += `${cnt > 1 ? cnt : ""}${prev}`;
        prev = current;
        cnt = 1;
      }
    }

    str += `${cnt > 1 ? cnt : ""}${prev}`;
    answer = Math.min(answer, str.length);
  }

  return answer;
}
```

### 회고
