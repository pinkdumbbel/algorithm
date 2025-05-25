### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

10으로 나눈 나머지를 기준으로 5와 비교하여 올림 및 내림 처리를 한다.
올림은 storey++이다.
근데 여기서 문제가 하나 생기는데
나머지가 5인경우에 일단 올리거나 내리거나 둘다 가능한 부분이라 +5를 카운트 해준다.
그다음 storey의 1의 자리가 5보다 크거나 같은경우 그냥 올림처리를 해버린다.

이유가 있다 예를들어 1595 인경우에
10으로 나눈 나머지가 5이기 때문에 내리든 올리든 일단 answer를 5 증가시킨다.
그다음 수를 보면 159 인데 이때 9는 5보다 큰 수이기때문에 올림으로 처리를 해버리는 것이다.
만약 아무것도 안한다면 내림으로 처리해야 되는데 그렇게 되면 이후에 +9를 해서 최적의 해를 찾을수 없게된다.

### 다른 풀이 코드

```js
function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    const current = storey % 10;
    storey = Math.floor(storey / 10);

    if (current > 5) {
      answer += 10 - current;
      storey++;
    } else if (current < 5) {
      answer += current;
    } else {
      answer += 5;
      if (storey % 10 >= 5) storey++;
    }
  }

  return answer;
}
```

### 회고

이 문제 어렵다...
다른 코드도 봤는데 재귀로 푼 사람도 있고 한데 GPT가 직관적으로 와닿는듯 하다.
근데 이걸 실제 코테볼때 마주치면 풀 수 있을까 싶다...
