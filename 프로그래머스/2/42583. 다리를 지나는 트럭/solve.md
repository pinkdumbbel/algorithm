### 풀이 결과

못품

### 다른 풀이 방법

1. 다리위의 총 무게 변수 와 다리의 길이만큼 채워진 배열 선언
2. 루프를 도는 조건은 정해진 트럭의 배열이 하나이상 있는 경우 그리고 다리위의 트럭 총 무게가 0 보다 큰 경우
3. 시간을 하나 증가
4. 다리에서 지나간 트럭 빼줌
5. 맨앞 트럭의 무게와 다리위의 총 무게가 다리의 총 무게보다 작거나 같은경우에 다리를 지나감
6. 아닌 경우 0을 채워 줌 (다리에 올라오지 못했다는 뜻)

### 다른 풀이 코드

```js
function solution(bridge_length, weight, truck_weights) {
  let answer = (sum = 0);
  const bridge = Array(bridge_length).fill(0);

  while (truck_weights.length || sum) {
    answer++;

    sum -= bridge.shift();

    if (truck_weights.length) {
      if (truck_weights[0] + sum <= weight) {
        const truck = truck_weights.shift();
        sum += truck;
        bridge.push(truck);
      } else {
        bridge.push(0);
      }
    } else {
      bridge.push(0);
    }
  }

  return answer;
}
```

### 회고

다른풀이 에서 다리의 길이만큼 0을 채워놓고 시작하는 방법이 참 좋은듯 하다.
그 이후 다리위의 트럭의 총 합계에서 다리에서 하나씩 빠지는 것도 쉽게 구현하는 것도 인상 깊었다.
근데 아무리 봐도 내가 이런 생각을 할 수 있을까 싶기도 하다...
