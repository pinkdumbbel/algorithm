### 풀이 결과

품 (힌트를 얻어서...)

### 내 풀이 방법

### 내 풀이 코드

```js
function solution(word) {
  let answer = 0;
  const arr = ["A", "E", "I", "O", "U"];
  const n = arr.length;
  let flag = false;

  const recur = (str = "") => {
    if (str.length > n || flag) return;
    if (str === word) {
      flag = true;
      return;
    }

    answer++;

    for (const w of arr) {
      recur(str + w);
    }
  };

  recur();

  return answer;
}
```

### 다른 풀이 방법

수학적으로 접근한건데 먼소린지 모르겟다...

### 다른 풀이 코드

```js
function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const counts = [781, 156, 31, 6, 1];

  let answer = 0;
  for (let i = 0; i < word.length; i++) {
    const idx = vowels.indexOf(word[i]);
    answer += idx * counts[i] + 1;
  }
  return answer;
}
```

### 회고
