### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(msg) {
  const answer = [];
  let last = 26;
  const hash = {};

  msg.split("").forEach((s) => {
    hash[s] = s.charCodeAt() - 64;
  });

  let tmp = "";
  let i = 0;
  while (i < msg.length) {
    tmp += msg[i];

    for (let j = i + 1; j < msg.length; j++) {
      tmp += msg[j];

      if (!hash[tmp]) {
        hash[tmp] = ++last;
        const key = tmp.slice(0, tmp.length - 1);
        i += key.length;
        answer.push(hash[key]);
        tmp = "";
        break;
      }
    }

    if (tmp) {
      answer.push(hash[tmp]);
      i += tmp.length;
    }
  }

  return answer;
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(msg) {
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;
  const ans = [];
  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    let longest = "";
    while (dict[(longest = msg.substring(i, j))] === undefined) --j;
    ans.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
  }

  return ans;
}
```

### 회고

다른풀이는 내가 봤을때는 최초에 풀었던 다른풀이가 훨씬 더 나은듯 하다.
