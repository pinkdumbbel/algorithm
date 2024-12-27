### 풀이 결과

품

### 내가 생각한 방법

1. cache를 담을 배열 선언
2. cache배열에서 해당하는 순회중인 값이 있으면 answer를 1 증가 && 해당 인덱스 캐시 삭제
3. 없으면 answer 5증가
4. cache배열 맨 앞에 값 삽입
5. cache배열의 크기가 cacheSize보다 커지면 pop

### 내가 작성한 코드

```javascript
function solution(cacheSize, cities) {
  var answer = 0;
  const caches = [];

  cities.forEach((city) => {
    const c = city.toLowerCase();
    const idx = caches.indexOf(c);

    if (idx >= 0) {
      answer += 1;
      caches.splice(idx, 1);
    } else {
      answer += 5;
    }

    caches.unshift(c);

    if (caches.length > cacheSize) {
      caches.pop();
    }
  });

  return answer;
}
```

### 다른 풀이 방법

기본적인 접근 방식은 같은데 Map을 통해 풀었다.
주의 깊게 봐야 할 점은 이터러블을 이용한 풀이 이다.

### 다른 풀이 코드

```javascript
function solution(cacheSize, cities) {
  // 캐시 크기가 0인 경우 특별 처리
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  // 대소문자 구분 없는 캐시 구현
  const cache = new Map();
  let answer = 0;

  for (const city of cities) {
    const cityLower = city.toLowerCase();

    // 캐시에 도시가 있는 경우 (캐시 히트)
    if (cache.has(cityLower)) {
      // 해당 도시를 가장 최근에 사용된 항목으로 갱신
      cache.delete(cityLower);

      answer += 1;
    }
    // 캐시에 도시가 없는 경우 (캐시 미스)
    else {
      // 캐시가 꽉 찬 경우 가장 오래된 항목 제거
      if (cache.size >= cacheSize) {
        const oldestKey = cache.keys().next().value;
        cache.delete(oldestKey);
      }

      answer += 5;
    }

    cache.set(cityLower, true);
  }

  return answer;
}
```

### 회고

맨 처음 Map을 통해 풀려고 했었는데 하다 보니 오래된 항목 제거 하는 부분이 까다로워 배열로 변경 해서 풀었다.
문제를 푼 이후 GPT에게 풀어달라고 했는데 Map을통해 풀었고 오래된 항목 제거를 자바스크립트 이터러블 개념을 통해 푼것을 보고 역시 GPT라는 생각을 했다.
Map을 통해 풀었기 때문에 캐시를 탐색하는 속도도 훨씬 빠를듯 하다. Map에서 맨 앞 키에 해당하는 값을 핸들링 하기 위해서는 이터러블 프로토콜을 사용하는것도 좋은 방법인듯 하다.

그리고 나는 무조건 cache를 삽입한 반면에 다른 모든 풀이네는 캐시에 없는경우 캐시를 확인해서 오래된 캐시를 삭제하는 로직이 들어가 있는데
항상 나는 문제를 풀때 마다 이런식으로 약간의 차이가 발생하는듯 하다... 이런 것도 반복적으로 하다 보면 패턴이 보이고 더 효율적으로 풀겠지...
