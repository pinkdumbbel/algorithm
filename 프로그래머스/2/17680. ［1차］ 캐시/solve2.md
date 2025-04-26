### 풀이 결과

품

### 내 풀이 방법

캐시를 저장하다가 cacheSize보다 캐시의 사이즈가 커지면 하나 제거한다.

### 내 풀이 코드

```js
function solution(cacheSize, cities) {
  let answer = 0;
  cities = cities.map((city) => city.toLowerCase());
  let map = new Map();

  cities.forEach((city) => {
    if (map.get(city)) {
      map.delete(city);
      answer += 1;
    } else {
      answer += 5;
    }

    map.set(city, true);

    if (map.size > cacheSize) {
      const iter = map[Symbol.iterator]();
      iter.next();
      map = new Map([...iter]);
    }
  });

  return answer;
}
```

### 다른 풀이 방법

내 풀이와 동일 다만 이터레이터를 사용하는 방법이 다름

### 다른 풀이 코드

```js
function solution(cacheSize, cities) {
  let answer = 0;
  cities = cities.map((city) => city.toLowerCase());
  let map = new Map();

  cities.forEach((city) => {
    if (map.get(city)) {
      map.delete(city);
      answer += 1;
    } else {
      answer += 5;
    }

    map.set(city, true);

    if (map.size > cacheSize) {
      const oldKey = map.keys().next().value;
      map.delete(oldKey);
    }
  });

  return answer;
}
```

### 회고

Map 객체 자체를 이터레이터로 변환해서 처리를 했는데 keys자체가 이터레이터를 반환해서 이렇게 접근하는 방법에 대해 딱 알았다.
