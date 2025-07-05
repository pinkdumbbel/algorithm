### 풀이 결과

못품

### 내 풀이 방법

문제 조건대로 품

### 내 풀이 코드

```js
function solution(p) {
  if (p === "") return p;

  if (isCorrect(p)) return p;

  let u = (v = "");
  let cnt = 0;

  for (let i = 0; i < p.length; i++) {
    const s = p[i];
    if (s === "(") cnt++;
    else cnt--;

    u += s;

    if (cnt === 0) {
      v = p.slice(i + 1);
      break;
    }
  }

  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    let result = "";

    result += "(";

    result += solution(v);

    result += ")";

    for (let i = 0; i < u.length; i++) {
      if (i === 0 || i === u.length - 1) continue;
      result += u[i] === ")" ? "(" : ")";
    }

    return result;
  }
}

const isCorrect = (str) => {
  let cnt = 0;
  for (const s of str) {
    if (s === "(") cnt++;
    else cnt--;

    if (cnt < 0) return false;
  }

  return cnt === 0;
};
```

### 다른 풀이 방법

do/while을 써서 풀었으면 내가 푼 풀이 보다 더 간단하다
그런데 눈 여겨 봐야 할부분이 올바른 괄호인지 판별을 할때 맨 앞 문자 뒷 문자만 체크해서 올바른 괄호인지 판별하는 로직이다.

### 다른 풀이 코드

```js
function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
```

### 회고

어떻게 여기서 맨 앞 문자와 뒷문자만 체크해서 올바른 괄호로 판별 하는지 참 신기하다...
아마 나는 똑같이 시험에 나왔어도 o(n)으로 올바른 괄호인지 체크 했을거 같다...
