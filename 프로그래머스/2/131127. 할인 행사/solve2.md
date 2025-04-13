### 풀이 결과

품

### 내 풀이 방법

1. 상위 루프를 순회하며 할인품목 배열을 10개씩 자른다.
2. 순회 할 때 마다 hash를 생성한다.
   - 잘라진 배열만큼 순회한다.
   - 해시에 원하는 품목이 있다면 -1을 해준다.
   - 0이되면 해시에서 delete해준다.
3. hash의 크기가 0이면 answer를 증가시킨다.

### 내 풀이 코드

```js
function solution(want, number, discount) {
  let answer = 0;
  const len = discount.length;

  for (let i = 0; i <= len - 10; i++) {
    const arr = discount.slice(i, i + 10);
    const map = new Map();

    want.forEach((el, i) => {
      map.set(el, number[i]);
    });

    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];

      if (map.has(item)) {
        map.set(item, map.get(item) - 1);
        if (map.get(item) === 0) map.delete(item);
      }
    }

    if (!map.size) answer++;
  }

  return answer;
}
```

### 다른 풀이 방법

해시를 만들지 않고 할인품목 리스트에서 원하는 품목의 개수가 몇개인지 필터링 해서 그 개수와 원하는 개수가 다른경우만 체크해서 answr를 증가시킨다.

### 다른 풀이 코드

```js
function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}
```

### 회고
