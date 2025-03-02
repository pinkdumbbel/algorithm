### 풀이 결과

품

### 내가 생각한 방법

1. 입차시간, 누적시간, 누적시간 비례 주차비에 해당하는 각각의 Map을 만듬
2. records를 순회하며 입차시간 과 누적시간을 계산
3. 입차시간 Map을 순회하며 23:59에서 뺀 값을 누적
4. 누적된시간 비례 해서 주차비를 계산

### 내 코드

```js
function solution(fees, records) {
  const answer = [];

  const timeMap = new Map();
  const tmp = new Map();
  const feeMap = new Map();

  const sortedNumbers = new Set(
    records.map((r) => r.split(" ")[1]).sort((a, b) => Number(a) - Number(b))
  );

  const getTime = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const [bt, bf, ut, uf] = fees;

  records.forEach((r) => {
    const [time, number, type] = r.split(" ");
    const nt = getTime(time);

    if (type === "IN") {
      tmp.set(number, nt);
      return;
    }
    const pt = nt - tmp.get(number);
    timeMap.set(number, (timeMap.get(number) || 0) + pt);
    tmp.delete(number);
  });

  tmp.forEach((time, number) => {
    const t = timeMap.get(number) || 0;
    const pt = getTime("23:59") - time;

    timeMap.set(number, t + pt);
  });

  timeMap.forEach((pt, number) => {
    if (pt <= bt) {
      feeMap.set(number, bf);
    } else {
      feeMap.set(number, bf + Math.ceil((pt - bt) / ut) * uf);
    }
  });

  sortedNumbers.forEach((n) => {
    answer.push(feeMap.get(n));
  });

  return answer;
}
```

### 다른 풀이 방법

1. 누적 주차시간을 저장할 객체를 선언
2. records를 순회
   - 입차 할 때는 1439(00:00~23:59분 까지 분으로 변환한 값) - 입차시간을 누적
   - 출차 할 때는 1439-출차시간을 빼면서 누적
3. 구해진 주차시간을 토대로 비용 계산

### 다른 풀이 코드

```js
function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
```

### 회고

일단 이 문제를 풀면서 **누적** 이라는 키워드를 보지 못해서 많이 해맸다 그래서 시간도 오래 걸렸다...
또한 다른 사람의 풀이를 보니 과연 저런 생각을 내가 할 수 있을까 싶다...
마지막으로 제발 문제좀 제대로 읽고 예제로 주어진 풀이를 좀 잘 봤으면 좋겠다!!!!
