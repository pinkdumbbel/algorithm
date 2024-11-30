### 풀이 결과

못품

### 내가 생각한 방법

1. 배열을 오름차순으로 정렬
2. 배열을 2개씩 나눠서 새로운 배열에 push
3. 그후 순회하며 요소 2개를 더해 limit보다 크면 2 작거나 같으면 1씩 증가

### 내가 작성한 코드

```javascript
function solution(people, limit) {
  people.sort((a, b) => a - b);

  let answer = 0;
  let tmp = [];
  const boat = [];

  people.forEach((kg, i) => {
    tmp.push(kg);
    if ((i + 1) % 2 === 0) {
      boat.push(tmp);
      tmp = [];
    }
  });

  if (tmp.length) boat.push(tmp);

  boat.forEach(([a, b = 0]) => {
    if (a + b > limit) {
      answer += 2;
    } else {
      answer++;
    }
  });

  return answer;
}
```

### 정답에 해당하는 방법

1. people를 오름차순으로 정렬 한다.
2. left(최소 무게), right(최대 무게) 각 포인터를 두어 투포인터 알고리즘 으로 해결
3. right(최대 무게)는 항상 배에 탑승
4. people의 최소 무게와 최대 무게를 더함
5. 합해진 무게가 제한 무게 보다 작거나 같으면 left(최소 무게) 탑승
6. 보트 개수 증가

### 정답 코드

```javascript
function solution(people, limit) {
  people.sort((a, b) => a - b);

  let answer = people.length;

  let lt = 0;
  let rt = people.length - 1;

  while (lt < rt) {
    if (people[lt] + people[rt] <= limit) {
      answer--;
      lt++;
      rt--;
    } else {
      rt--;
    }
  }

  return answer;
}
```

### 회고

투포인터를 사용해야 겠다는 생각 자체를 못했다...
그리디 알고리즘은 연습을 많이 해야 겠다...
