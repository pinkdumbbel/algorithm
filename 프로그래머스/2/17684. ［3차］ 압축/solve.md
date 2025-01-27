### 풀이 결과

못품

### 내가 생각한 방법

1. 문자를 하나하나 누적한다.
2. 누적한 문자가 사전에 존재하면 현재 문자를 누적한 문자로 변경한다.
3. 없으면 사전에 추가하고 answer에 누적되지 않은 현재 문자의 인덱스를 추가한다.

### 다른 풀이 코드

```javascript
function solution(msg) {
  const answer = [];
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dic = new Map();

  str.split("").forEach((c, i) => {
    dic.set(c, i + 1);
  });

  let index = str.length + 1;
  let w = "";

  msg.split("").forEach((c) => {
    const wc = w + c;

    if (dic.has(wc)) {
      w = wc;
    } else {
      answer.push(dic.get(w));
      dic.set(wc, index++);
      w = c;
    }
  });

  if (w) {
    answer.push(dic.get(w));
  }

  return answer;
}
```

### 회고

사실 문제 자체가 이해하기 어렵진 않아서 접근하는 방식은 비슷한데
구현함에 있어서 차이가 있었다.

나는 애초에 while로 순회하면서 2중 반복으로 풀 생각을 했었다.
이유는 누적한 후에 shift를 통해 값을 제거하기 위해서 였다. 이렇게 하니 오히려 잘 풀리지 않았다.
생각해보니 현재 문자와 다음 문자를 합쳐 사전에 있는지만 비교하면 되는 부분 이였는데 너무 바보같이 접근 했다.

문제를 풀면 풀수록 드는 생각인데 과연 문제를 풀기만 한다고 해서 실력이 늘까 라는 근본적인 고민이 생기기 시작했다...
