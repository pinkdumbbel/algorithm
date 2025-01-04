### 풀이 결과

못품...

### 내가 작성한 코드

```javascript
function solution(phone_book) {
  var answer = true;

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      if (i === j) continue;
      if (phone_book[i].startsWith(phone_book[j])) return false;
    }
  }

  return answer;
}
```

### 다른 풀이 방법

- 해시를 사용한 코드

  1. 모든 번호를 전부 해시맵에 저장 한다.
  2. 전화번호 리스트를 순회 하면서 각 전화번호를 전화번호 길이만큼 순회하며 slice 한다.
  3. slice한 전화번호가 해시에 저장이 되어 있는지 확인 후 있으면 false를 반환한다.

- 정렬을 사용한 코드
  1. 전화번호 목록을 사전순서 대로 정렬하여 비슷한 접두어 끼리 인접 하도록 한다.
  2. some 메서드를 통해 다음 인덱스의 문자열에 현재 문자열이 접두어로 되어 있는지 확인한다.

### 다른 풀이 코드

- 해시를 사용한 코드

```js
function solution(phone_book) {
  const hashMap = new Map();

  for (let phone of phone_book) {
    hashMap.set(phone, true);
  }

  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.slice(0, i);

      if (hashMap.has(prefix) && prefix !== phone) {
        return false;
      }
    }
  }
  return true;
}
```

- 정렬을 사용한 코드

```js
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
```

### 회고

처음에 문제 카테고리가 해시로 되어 있어서 해시로 접근하려고 했는데
이 문제를 어떻게 해시로 푸는거지 라는 생각이 들었고 결국 2중 반복으로 풀었는데 역시나 효율성 체크에서 통과 되지 못했다.

그래서 GPT한테 물어본 결과 각 번호를 해시에 true로 단순히 저장만 해놓고 각 번호를 순회하며 문자열을 1~n개씩 slice하여 해시에 있는지 비교하는 로직 이였다.
이렇게 접근 할 수 있다는 것도 또 다시 배웠다.

이렇게 문제를 풀고 다른 사람이 푼 코드를 봤는데 정렬로 푼 코드가 있었다.
어떻게 한 것인지 보니 사전순서 대로 정렬하여 접두어가 비슷한 문자열들 끼리 인접하게 되고
이때 순회 하면서 다음 문자열에 현재 문자열이 프리픽스로 존재하는지 확인 하는 로직이였다.
이 문제를 정렬로도 접근 한 것을 보고 참신했다...
