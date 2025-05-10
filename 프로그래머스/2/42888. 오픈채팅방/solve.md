### 풀이 결과

품

### 내 풀이 방법

record를 순회 하면서 나간것을 제외한 모든 경우에 대해 uid를 nickname으로 지정
record를 다시 순회 하면서 닉네임 변경을 제외한 타입만 answer에 push

### 내 풀이 코드

```js
function solution(record) {
  const answer = [];
  const map = new Map();

  record.forEach((r) => {
    const [type, uid, nickName] = r.split(" ");

    if (type !== "Leave") {
      map.set(uid, nickName);
    }
  });

  record.forEach((r) => {
    const [type, uid, nickName] = r.split(" ");
    const currentNickName = map.get(uid);

    if (type !== "Change") {
      const message = `${currentNickName}님이 ${
        type === "Enter" ? "들어왔습니다." : "나갔습니다."
      }`;
      answer.push(message);
    }
  });

  return answer;
}
```

### 다른 풀이 방법

내 풀이 방식과 동일

### 다른 풀이 코드

```js

```

### 회고

이 문제는 예전에 알고리즘 세미나? 같은 곳에서 풀었던 문제라서 solve.md가 없었다.
