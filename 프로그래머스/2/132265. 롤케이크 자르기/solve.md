### 풀이 결과

못품...

### 내가 생각한 방법

Set을 사용하여 왼쪽과 오른쪽을 나눠 사이즈가 같으면 answer를 하나 증가시킨다.

### 다른 풀이 방법

왼쪽과 오른쪽을 나눠 사이즈를 비교하여 답을 구하는 과정 자체는 똑같지만
사용한 자료구조의 차이가 있다.

1. 먼저 나누기 전에 모든 토핑의 종류별 개수를 구한다. 사실상 나누기 전의 오른쪽 모든 토핑종류의 생각 하면 된다.
2. 실제로 케이크를 자르는 작업을 한다.
3. 오른쪽 토핑 종류별 개수에서 현재 해당하는 토핑의 개수를 하나 차감한다.
4. 왼쪽에는 현재 토핑을 추가한다.
5. 만약 오른쪽의 토핑의 개수가 0이되면 해당 토핑은 제거한다.
6. 오른쪽 토핑의 개수와 왼쪽 토핑의 개수를 비교한다.

### 다른 풀이 코드

```javascript
function solution(topping) {
  let answer = 0;
  const right = new Map();
  const left = new Set();

  topping.forEach((e) => {
    right.set(e, (right.get(e) ?? 0) + 1);
  });

  topping.forEach((e) => {
    const cnt = right.get(e);
    right.set(e, cnt - 1);
    left.add(e);

    if (right.get(e) === 0) {
      right.delete(e);
    }

    if (left.size === right.size) {
      answer++;
    }
  });

  return answer;
}
```

### 회고

처음엔 slice로 풀어도 보고 시간이 초과 되어서 pop으로도 풀어 봤는데
shift로 맨앞 원소를 제거하는게 O(1)인줄 알았는데 O(n)이라는 사실을 알았다.
그리고 Set에 add를 하여 하나씩 추가하는 것은 O(1) 인데 반해
Set을 선언할 당시 배열을 넣어 미리 초기화 하는 방법은 O(n) 이라는 것을 알았다.
