### 풀이 결과

못품

### 내가 생각한 방법

1. answer를 numbers 만큼 -1로 미리 채워넣는다
1. numbers를 인덱스와 값을 저장한 객체의 배열 형태로 변환한다.
1. 수를 기준으로 오름차순 정렬한다.
1. 오름차순 정렬이기 때문에 순회 할 때 마다 answer에 해당하는 인덱스의 값을 변경한다.

### 다른 풀이 코드

```javascript
function solution(numbers) {
  const n = numbers.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const n = numbers[i];

    while (stack.length > 0 && numbers[stack[stack.length - 1]] < n) {
      result[stack.pop()] = n;
    }
    stack.push(i);
  }

  return result;
}
```

### 회고

일단 이 문제를 스택으로 풀 생각을 전혀 하지 못했고 스택을 써야 된다는 힌트를 얻고 풀이를 하는데
잘 풀리지 않았다... 인덱스를 stack에 넣고 numbers의 stack의 마지막 값인 인덱스를 비교한다는 컨셉을 결국 떠올리지 못했다...
앞으로 뒤에 있는 수와 비교를 하는데 중복이 된 값이 있다면 스택을 사용해야 한다고 떠올려 질듯 하다.

그런데 최악의 경우에는 O(n^2)가 나올텐데 어떻게 풀이가 통과 됐는지 신기하다... 참 시간복잡도 개념이 어렵다...
