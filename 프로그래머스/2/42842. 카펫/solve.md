### 풀이 결과

품

### 내 풀이 방법

- brown과 yellow를 더한 총 격자 수를 구한다.
- 총 격자수/3한 값(최대 가로길이) 부터 3(최소 가로길이)까지 감소하며 순회 한다.
  - 총 격자수 에서 가로격자 수를 나눈 나머지가 0 일때
    - 총격자수/가로격자수 를 계산해 세로격자수를 구한다.
    - 가로격자수-2(양끝) \* 세로격자수-2(위/아래)의 값이 yellow격자수와 같으면 해당 값을 리턴한다.

### 내 풀이 코드

```js
function solution(brown, yellow) {
  const total = brown + yellow;
  let width, height;

  for (width = parseInt(total / 3); width >= 3; width--) {
    if (total % width == 0) {
      height = total / width;
      if ((width - 2) * (height - 2) === yellow) break;
    }
  }

  return [width, height];
}
```

### 다른 풀이 방법

풀이 방법은 같으나
순회하는 기준을 height로 잡고 품

### 다른 풀이 코드

```js
function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      const width = total / height;
      const yellowWidth = width - 2;
      const yellowHeight = height - 2;

      if (yellowWidth * yellowHeight === yellow) {
        return [width, height];
      }
    }
  }
}
```

### 회고

그때 당시 못풀었던 문제 같은데 이제 풀 수 있는거 보니 쬐끔은 늘은듯 하다...
