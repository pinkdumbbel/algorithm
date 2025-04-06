### 풀이 결과

품

### 내 풀이 방법

투포인터 알고리즘 으로 해결

1. people을 내림차순 정렬
2. 첫번째 인덱스(가장 무거운 사람)와 마지막 인덱스(가장 가벼운 사람)의 요소합이 limit보다 작거나 같다면 끝 포인터를 하나 감소(구조 됐기 때문에 제거)
3. answer는 루프를 순회 할때마다 증가해준다.

### 내 풀이 코드

```js
function solution(people, limit) {
  let answer = 0;
  let rt = people.length - 1;
  people.sort((a, b) => b - a);

  for (let lt = 0; lt <= rt; lt++) {
    if (people[lt] + people[rt] <= limit) {
      rt--;
    }
    answer++;
  }

  return answer;
}
```

### 다른 풀이 방법

기본적으로 풀이는 다 비슷하다.

### 다른 풀이 코드

```js
function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
```

### 회고

이 문제 기억은 나는데 그때 상당히 고전했던거 같은데 반년도 넘게 있다 다시푸니 쉽게 풀렸다.
뭔가 알고리즘 실력이 늘은거 같다... 굿
