### 풀이 결과

품

### 내 풀이 방법

- 두 큐의 합을 미리 구해 변수에 할당
- queue1과 queue2의 각각을 순회할 포인터를 하나 정의한다.
- 순회 시작
  - 각 큐중 합이 더 큰 큐의 첫번째 원소를 빼고 해당 원소를 다른 큐의 마지막 원소로 삽입 한다.
  - 위 과정은 shift연산 없이 증감과 포인터 이동으로 처리한다.
  - 반복한다.

### 내 풀이 코드

```js
function solution(queue1, queue2) {
  let answer = 0;
  const n = queue1.length;

  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);

  let p1 = 0;
  let p2 = 0;
  let cnt = 0;

  while (cnt < n * 3) {
    if (sum1 > sum2) {
      const item = queue1[p1++];
      sum1 -= item;
      sum2 += item;
      queue2.push(item);
    } else if (sum1 < sum2) {
      const item = queue2[p2++];
      sum2 -= item;
      sum1 += item;
      queue1.push(item);
    } else {
      return answer;
    }

    answer++;
    cnt++;
  }

  return sum1 !== sum2 ? -1 : answer;
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

처음에 접근 했을때 못 풀 줄 알았는데 한번 예제 케이스를 쭉 나열하고 보니 패턴이 보여서 그대로 풀었더니 해결했다.
다른 답안을 봐도 내 풀이와 동일했고 이전에 못푼 문제였는데 풀어서 뿌듯하다.
