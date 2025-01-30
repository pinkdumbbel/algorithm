### 풀이 결과

품

### 내가 생각한 방법

1. 카운트를 하나씩 증가시키며 n진수로 변환한다.
2. 변화된 n진수의 값을 순회하며 차례가 왔을때 answer에 누적한다.

### 내 풀이 코드

```javascript
function solution(n, t, m, p) {
  let answer = "";
  let cnt = 0;
  let turn = 0;

  while (answer.length !== t) {
    const c = (cnt++).toString(n).toUpperCase();

    for (const s of c) {
      if (turn++ % m === p - 1) {
        answer += s;
      }

      if (answer.length === t) return answer;
    }
  }

  return answer;
}
```

### 다른 풀이 코드

```javascript
function solution(n, t, m, p) {
  let answer = "";
  let sequence = "";
  let num = 0;

  // 필요한 길이만큼 n진수 문자열 생성
  while (sequence.length < t * m) {
    sequence += num.toString(n).toUpperCase();
    num++;
  }

  // 튜브의 순서에 맞는 숫자만 추출
  for (let i = p - 1; i < t * m; i += m) {
    answer += sequence[i];
  }

  return answer.substring(0, t);
}
```

### 다른 풀이 방법

1. 튜브가 말해야 하는 숫자 t \* 참가하는 인원 m 만큼 숫자를 하나씩 증가하며 진법 변환을 하여 누적한다.
2. 튜브가 말해야 하는 숫자 t \* 참가하는 인원 m 만큼을 튜브의 순서에 맞게 순회하며 answer에 값을 누적한다.

### 회고

나는 확실히 이런류의 문제를 풀때 증감연산자를 많이 사용하는듯 하다...
이렇게 하면 답은 나올지 모르겠지만 버그가 발생 할 확률이 높고 어떤 부분에서 발생 되었는지 찾기도 힘들다...

반면에 GPT의 답을 보면 일단 조건에 맞게 문자열을 모두 누적한 다음 그 문자열에서 답을 도출하는 식으로 접근하는데
확실히 코드가 잘 읽히면서도 깔끔한듯 하다... 빨리 저렇게 생각 할 수 있는 수준까지 도달 했으면 좋겠다...
