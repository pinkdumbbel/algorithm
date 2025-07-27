### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(plans) {
  const answer = [];
  plans = plans
    .map((plan) => [plan[0], getTime(plan[1]), Number(plan[2])])
    .sort((a, b) => a[1] - b[1]);

  const stack = [];

  for (let i = 0; i < plans.length; i++) {
    const [name, startTime, playTime] = plans[i];
    const nextStartTime = i < plans.length - 1 ? plans[i + 1][1] : Infinity;

    let currentTime = startTime;
    let remainTime = playTime;

    const diffTime = nextStartTime - currentTime;

    if (diffTime >= remainTime) {
      answer.push(name);
      currentTime += remainTime;

      while (stack.length && currentTime < nextStartTime) {
        const task = stack.pop();
        const leftTime = nextStartTime - currentTime;

        if (leftTime >= task.remainTime) {
          currentTime += task.remainTime;
          answer.push(task.name);
        } else {
          currentTime = nextStartTime;
          task.remainTime -= leftTime;
          stack.push(task);
        }
      }
    } else {
      remainTime -= diffTime;
      stack.push({
        name,
        remainTime,
      });
    }
  }

  while (stack.length) answer.push(stack.pop().name);

  return answer;
}

const getTime = (time) => {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
};
```

### 회고

스택으로 구현하는 문제였는데 남은시간 처리와 현재시간 처리가 까다로워서 풀지 못했다...
