### 풀이 결과

품

### 내가 생각한 방법

1. 우선순위별로 정렬을 한다.
2. 순회를 하기 전 프로세스의 인덱스(pt)를 저장하는 포인터와 정렬된 프로세스 인덱스(mpt)를 저장하는 포인터 2개 선언
3. 순회를 하면서 현재 인덱스의 프로세스가 정렬된 인덱스의 프로세스와 같다면 프로세스를 실행후 포인터 하나 증가
4. 반복하며 원본배열 포인터가 로케이션과 동일한지 검증하여 값 리턴

### 다른 풀이 방법

1. 우선순위를 정렬하는게 아니라 객체의 형태로 우선순위와 인덱스를 저장한 배열을 새로 만듬
2. 현재 프로세스보다 우선순위가 높은 프로세스가 있으면 현재 프로세스를 push해서 뒤로 이동
3. 없으면 현재 프로세스 실행

### 다른 풀이 코드

```javascript
function solution(priorities, location) {
  let answer = 0;

  const queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));

  while (queue.length > 0) {
    const currentProcess = queue.shift();

    const hasHigherPriority = queue.some(
      (process) => process.priority > currentProcess.priority
    );

    if (hasHigherPriority) {
      queue.push(currentProcess);
    } else {
      answer++;

      if (currentProcess.index === location) return answer;
    }
  }
}
```

### 회고

큐의 우선순위와 함께 인덱스를 객체로 저장할 생각을 못했다. 이렇게 또 하나 배워 간다.
또 현재 실행될 프로세스 보다 우선순위가 높은 프로세스가 있다면 큐의 뒤로 push를 하도록 처리 하는것도 배웠다.

이 문제를 풀면서 생각 해봤는데 항상 증감 연산자를 많이 쓰거나 억지로 인덱스를 조작해야 하는경우
예를 들면 `pt = pt == priorities.length - 1 ? 0 : pt + 1;` 이런 부분 같은 경우를 좀 자제하는 노력을 해야 될듯 하다.
문제를 많이 풀어 보는 방법 밖엔 없겠지...
