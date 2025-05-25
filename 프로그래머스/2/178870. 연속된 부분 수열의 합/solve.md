### 풀이 결과

품

### 내 풀이 방법

- 순회 할 떄 마다 값을 누적하고 동시에 큐에 인덱스를 저장한다.
- 누적값이 커지면 그때 큐에 첫번째 값 부터 빼면서 k와 같은지 찾는다.
- k와 같은 경우에 현재 answer에 저장되어 있는 길이보다 큐의 마지막 인덱스-p 가 작다면 바꿔준다.

### 내 풀이 코드

```js
function solution(sequence, k) {
  let answer = [0, Number.MAX_SAFE_INTEGER];

  const n = sequence.length;
  const queue = [];

  let p = (sum = 0);

  for (let i = 0; i < n; i++) {
    const current = sequence[i];
    sum += current;
    queue.push(i);

    while (sum > k) {
      sum -= sequence[queue[p++]];
    }

    if (sum === k) {
      const a = answer[1] - answer[0];
      const b = queue[queue.length - 1] - queue[p];

      if (a > b) {
        answer = [queue[p], queue[queue.length - 1]];
      }
    }
  }
  return answer;
}
```

### 다른 풀이 방법

투포인터로 풀었다.
기본적으로 right가 움직이면서 값을 누적하고
sum > k가 되는 시점에 left에 해당하는 값을 빼주면서 left를 증가시킨다.
결국 내 코드에서 right가 큐이고 left가 p인 샘이다.

### 다른 풀이 코드

```js
function solution(sequence, k) {
  var answer = [0, sequence.length - 1];
  let left = 0;
  let right = 0;

  let sum = sequence[left];
  while (right < sequence.length) {
    if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      let distance = answer[1] - answer[0];
      let currentDistance = right - left;
      if (distance > currentDistance) {
        answer = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }

  return answer;
}
```

### 회고

증감연산을 많이 하고 싶지 않아서 큐로 풀었는데 나쁘지 않은듯 하다.
근데 answer를 초기화 할 때 Number.MAX_SAFE_INTEGER 보다 주어진 시퀀스 길이 만큼이 더 좋아보인다...ㅋㅋㅋ
