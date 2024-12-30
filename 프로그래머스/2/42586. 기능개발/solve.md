### 풀이 결과

품

### 내가 생각한 방법

1. 스택을 만든다.
2. progresses를 순회 하면서 100이 될때 까지 돈다.
3. while을 순회 하면서 day를 하나씩 증가 시킨다.
4. 100이 되면 stack에 push한다.
5. stack에 이미 값이 있는데 그 값이 삽입 될 day보다 크거나 같으면 그 값으로 처리한다.
6. stack을 만들었으면 while을 돌면서 shift를 한다.
7. 임시변수 tmp를 선언한다.
8. 순회를 하면서 stack에 있는 일자를 tmp에 할당한다.
9. 순회를 하면서 누적할 변수 sum을 만들고 하나씩 증가 시킨다.
10. 현재 일자가 tmp보다 큰 경우에만 answer에 push한다.

### 다른 풀이 방법

1. 각 기능별 배포 일자를 계산한다.
2. 배포 일자를 순회하며 그룹핑 하여 카운팅 한다.

### 다른 풀이 코드

```javascript
function solution(progresses, speeds) {
  const answer = [];

  const deploymentDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let currentMax = deploymentDays[0];
  let count = 0;

  for (let day of deploymentDays) {
    if (day <= currentMax) {
      count++;
    } else {
      result.push(count);
      count = 1;
      currentMax = day;
    }
  }

  result.push(count);

  return result;
}
```

### 회고

배포일자 배열을 만들때 나는 작업 속도 만큼 다 빼면서 구했는데 다른 풀이를 보니 배포 가능한 100에서 뺀 후 속도를 나눈 값으로 처리를 한것을 보고 저런 방법이 있구나 하고 또 한번 벽을 느꼈다...

그 다음 내가 가장 고민했던 부분이 어떻게 이전 인덱스의 값과 비교를 하느냐 였는데 나는 tmp라는 임시 변수를 만들어 저장후에 비교하도록 했다

그런데 다른 풀이를 보니 그냥 배열의 맨 처음 값을 할당 해 놓고 그 값을 순회할 때마다 배포일이 크면 그 값으로 바꿔주면 되는 것이였다...

항상 하는 생각인데 뭔가 하면서 아 이건 너무 억지로 혹은 지저분한데 싶으면 맞더라도 잘못된 코드 인듯 하다... 연습을 더 많이 해야겠다 ㅠㅠ
