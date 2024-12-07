### 풀이 결과

품

### 내가 생각한 방법

1. N번만큼 순회
2. 순회 하면서 answer를 하나 증가
3. 루프가 하나씩 돌 때마다 현재 참가번호/2 올림처리
4. 올림처리된 값의 홀/짝을 판별하여 반복적으로 처리하다가 a와 b가 n-1과 n이 되는 순간에 answer를 리턴한다.

### 내가 작성한 코드

```javascript
function solution(n, a, b) {
  var answer = 1;

  for (let i = 0; i < n; i++) {
    if (a % 2) {
      if (a + 1 === b) return answer;
    } else {
      if (a - 1 === b) return answer;
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer++;
  }

  return answer;
}
```

### 다른 풀이 방법

참가 번호를 2로 나눈후 올림 하는 작업을 반복적으로 하면 어느 순간 부터 a,b둘다 1로 떨어진다 이때까지 순회한 횟수가 서로 만날 떄 까지의 경기수 이다.

### 다른 풀이 코드

```javascript
function solution(N, A, B) {
  let round = 0;

  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);

    round++;
  }

  return round;
}
```

### 회고

맨 처음에 경기는 무조건 한다고 생각하고 answer를 1로 할당 했는데 다른 풀이를 보니 a,b가 둘다 1이 되는 시점에 answer를 리턴하면 되는 문제였다.
