### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const bridge = [];
  const timer = [];
  let total = 0;

  while (truck_weights.length) {
    //다리를 지나가고 있는 트럭이 다리의 총 길이보다 적고
    //현재까지 브릿지 위의 무게에 이번 트럭이 지나갔을때의 무게를 더했을때 정해진 무게 이하일때
    //다리위에 트럭을 하나 올림
    if (bridge.length < bridge_length && total + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      total += truck;
      bridge.push(truck);
      timer.push(0);
    }

    //각 트럭별 타이머 업데이트
    for (let i = 0; i < timer.length; i++) {
      timer[i]++;
    }

    //타이머중 다리를 모두 지난경우 처리
    if (timer[0] === bridge_length) {
      const truck = bridge.shift();
      const time = timer.shift();
      total -= truck;
    }

    answer++;
  }

  //아직 다리위를 지나가고 있는 트럭 처리
  while (timer.length) {
    if (timer[0] === bridge_length) timer.shift();

    for (let i = 0; i < timer.length; i++) {
      timer[i]++;
    }

    answer++;
  }

  return answer;
}
```

```js
//다시 풀어본 코드
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const bridge = new Array(bridge_length).fill(0);
  let sum = 0;

  while (truck_weights.length) {
    answer++;
    sum -= bridge.shift();

    if (sum + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      sum += truck;
      bridge.push(truck);
    } else {
      bridge.push(0);
    }
  }

  while (bridge.length) {
    answer++;
    bridge.pop();
  }

  return answer;
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고
