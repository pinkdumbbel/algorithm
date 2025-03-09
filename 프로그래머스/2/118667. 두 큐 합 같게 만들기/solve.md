### 풀이 결과

못품

### 다른 풀이 방법

1. 투포인터 방식으로 해결
2. while문이 반복하는 횟수는 큐의 길이 \* 3으로 정의
   - 두개의 큐가 바뀌는 경우 각각의 큐가 모두 제거되고 채워지는 경우(2n)
   - 두개의 큐를 바꾼 후에 추가적인 작업이 필요한 경우 n 해서 총 3n
3. 하나의 큐가 합이 mid보다 큰 경우에는 해당 큐의 포인터 값을 해당 큐의 합에서 빼주고 다른 큐의 합에 더해주면서 push한다.
4. 위 작업을 반복하며 두개의 큐의 합이 같을떄 까지 순회하며 절대 같게 만들지 못하면 -1을 리턴한다.

### 다른 풀이 코드

```js
function solution(queue1, queue2) {
  let answer = 0;

  const total = queue1.concat(queue2).reduce((a, b) => a + b, 0);

  if (total % 2) return -1;

  const n = queue1.length;
  const mid = total / 2;

  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);

  let p1 = 0,
    p2 = 0;

  while (answer <= n * 3) {
    if (sum1 === sum2) return answer;

    if (sum1 > mid) {
      const v = queue1[p1++];
      sum1 -= v;
      sum2 += v;
      queue2.push(v);
    } else {
      const v = queue2[p2++];
      sum1 += v;
      sum2 -= v;
      queue1.push(v);
    }

    answer++;
  }

  return -1;
}
```

### 회고

투포인터로 풀 생각은 전혀 못했다.
그리고 shift를 이용해서 풀려고 했는데 당연히 효율성 테스트에서 실패 했다...
포인터를 옮겨가며 굳이 배열에서 원소를 제거하지 않고 합에서 빼는 방식으로 처리하며 O(1)로 끝내는 방식이 인상 깊었다.
앞으로 이런류의 문제를 마주치면 이번 문제에서 해결한 방법을 떠올릴수 있을듯 하다.
