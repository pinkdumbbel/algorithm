### 풀이 결과

품

### 내가 생각한 방법

시간복잡도를 고려해서 주문순서를 반대로 하여 pop을 이용하여 품
순서대로 나열된 박스배열중 하나를 꺼냈을때 그 상자의 순서와 order의 순서가 일치하다면
order에서도 하나 꺼냄

불일치 한다면 stack(보조 컨테이너)에서 맨 마지막 값을 확인해서 order상자와 비교한 후 같을때 까지 순회

이후에 stack의 값을 order와 비교하며 소모시킴

### 내가 작성한 코드

```javascript
function solution(order) {
  let answer = 0;

  order.reverse();
  const n = order.length;
  const box = Array.from({ length: n }, (_, i) => n - i);
  const stack = [];

  let o = order.pop();

  while (box.length) {
    const b = box.pop();

    if (b === o) {
      answer++;
      o = order.pop();
    } else {
      while (stack[stack.length - 1] === o) {
        answer++;
        stack.pop();
        o = order.pop();
      }

      stack.push(b);
    }
  }

  while (stack.length && stack[stack.length - 1] === o) {
    answer++;
    stack.pop();
    o = order.pop();
  }

  return answer;
}
```

### 다른 풀이 방법

1번 박스부터 order개수 만큼 하나씩 증가하며 순회 한다.
순회 할 때 마다 stack에 push한다.
스택의 마지막 값과 order가 일치하면
stack을 pop해주고 order순서를 다음 박스로 변경하고 answer를 하나 증가시킨다.

### 다른 풀이 코드

```javascript
function solution(order) {
  const stack = [];
  let index = 0;
  let count = 0;

  for (let box = 1; box <= order.length; box++) {
    stack.push(box);

    while (stack.length && stack[stack.length - 1] === order[index]) {
      stack.pop();
      index++;
      count++;
    }
  }

  return count;
}
```

### 회고

풀긴 풀었는데 너무 돌아간듯 하다...
굳이 박스 배열을 만들 필요도 없었다...
사실 증감연산자를 많이쓰기 싫어서 저렇게 배열 메서드를 이용하려고 했는데 하고보니 증감연산을 사용 하는게 훨씬 더 쉽고 간단하게
풀리는 문제였다...
