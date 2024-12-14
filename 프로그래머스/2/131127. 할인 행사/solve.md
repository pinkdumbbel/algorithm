### 풀이 결과

품

### 내가 생각한 방법

1. hash를 만들어 원하는 품목과 개수를 저장
2. 슬라이딩 윈도우 방식으로 해결
   1. while문을 포인터가 할인행사 일자 수 - 10 이 될때 까지 순회
      1. hash를 복사
      2. for(let i = 포인터; i < 10+포인터; i++) 순회
         1. 복사된 hash에 할인품목이 존재 하는경우 개수를 하나 차감 (0보다 작아 질 수 없음)
      3. 복사된 hash의 값이 모두 0 인경우에만 answer를 증가

### 다른 풀이 방법

기본적인 풀이는 비슷 하나 코드적으로 아래와 같이 다른 차이가 있음

- for문을 내부에서 다시 순회하는것이 아닌 slice로 처리
- hash복사가 아닌 reduce를 통해 새로운 객체를 다시 생성

### 다른 풀이 코드

```javascript
function solution(want, number, discount) {
  const wantDict = want.reduce((acc, item, idx) => {
    acc[item] = number[idx];
    return acc;
  }, {});

  let possibleDays = 0;

  for (let startDay = 0; startDay <= discount.length - 10; startDay++) {
    const window = discount.slice(startDay, startDay + 10);
    const windowCount = window.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    const isValidPeriod = want.every(
      (item) => windowCount[item] >= (wantDict[item] || 0)
    );

    if (isValidPeriod) possibleDays++;
  }

  return possibleDays;
}
```

### 회고

확실히 요구사항을 먼저정의하고 그 다음 가설코드를 세우는게 가장 빨리 푸는 방법일거 같다.
gpt한테 다른 풀이를 전달 받았지만 내 코드가 더 효율이 좋다는게 뿌듯하다
