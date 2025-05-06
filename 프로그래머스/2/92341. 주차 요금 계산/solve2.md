### 풀이 결과

품

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(fees, records) {
  let answer = [];
  const last = getTime("23:59");
  const map1 = new Map();
  const map2 = new Map();

  records.forEach((record) => {
    map1.set(record.split(" ")[1], 0);
    map2.set(record.split(" ")[1], 0);
  });

  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");
    const timeToMinute = getTime(time);

    if (type === "IN") {
      map1.set(carNumber, timeToMinute);
    } else {
      map2.set(
        carNumber,
        map2.get(carNumber) + timeToMinute - map1.get(carNumber)
      );
      map1.delete(carNumber);
    }
  });

  for (const [carNumber, time] of map1.entries()) {
    map2.set(carNumber, map2.get(carNumber) + (last - time));
    map1.delete(carNumber);
  }

  [...map2.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .forEach(([carNumber, time], i) => {
      if (time <= fees[0]) {
        answer[i] = fees[1];
        return;
      }
      answer[i] = fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    });

  return answer;
}

const getTime = (time) => {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
};
```

### 다른 풀이 방법

### 다른 풀이 코드

```js

```

### 회고

기존 풀이와 다르지 않음
