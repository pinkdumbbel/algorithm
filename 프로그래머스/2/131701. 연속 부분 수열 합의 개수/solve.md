### 풀이 결과

품

### 내가 생각한 방법

1. 중복 제거를 위해 Set을 선언
2. elements를 순회 하면서 루프 한번 돌 때 마다 elements를 3중 반복으로 실행
3. i = 0부터 elements.length-1 까지 순회
4. j = 0부터 elements.length-1 까지 순회
5. k = j부터 i+j 까지 순회 값을 누적
6. k가 elements의 길이보다 크거나 같을때 k-elements의 길이를 해준 인덱스로 접근해서 누적한다.
7. k루프가 종료되면 누적한 값을 set에 저장한다.
8. 모든 요소를 k루프 까지 실행되고 난 이후 set의 size를 리턴한다.

### 내가 작성한 코드

```javascript
function solution(elements) {
  const set = new Set();
  const len = elements.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let sum = 0;
      for (let k = j; k <= i + j; k++) {
        const idx = k >= len ? k - len : k;
        sum += elements[idx];
      }
      set.add(sum);
    }
  }

  return set.size;
}
```

### 다른 풀이 방법

1. 기존 elements 에 elements를 한번더 확장한다.
2. 중복 제거를 위해 Set을 선언
3. 루프를 2중으로 순회한다.
4. i를 시작점으로 하여 j를 연속으로 누적하여 set에 저장한다.
5. set의 사이즈를 리턴한다.

### 다른 풀이 코드

```javascript
function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
```

### 회고

인풋으로 주어진 배열을 확장해야 한다는 생각을 못했다. 이런 부분들은 계속 연습을 해야겠다...

문제를 풀 때 각 길이만큼씩 루프를 순회하며 누적하는 방식만 생각 했는데
다른 풀이를 보니 각 원소별로 누적 될 수 있는 경우의 수를 모두 구한방법으로 풀었다.
이런 방법은 어떻게 생각하는건지... 계속 연습 해야겠다...
