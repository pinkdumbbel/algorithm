### 풀이 결과

못품

### 내가 생각한 방법

1. 문자열을 요구사항에 맞게 [head, number, tail]로 나눈다
2. 숫자를 기준으로 정렬을 하고 그 후에 문자열 기준으로 정렬해서 하나의 문자로 합친다.

### 내 풀이 코드

```javascript
function solution(files) {
  const arr = [];

  files.forEach((name) => {
    let s = "";
    let n = "";

    for (let i = 0; i < name.length; i++) {
      const v = name[i];
      if (isNaN(name[i])) {
        if (n.length) {
          arr.push([s, n, name.slice(i)]);
          break;
        }
        s += v;
      } else {
        n += v;
      }
    }
  });

  return arr
    .sort((a, b) => a[1] - b[1])
    .sort((a, b) =>
      a[0].toLowerCase() < b[0].toLowerCase()
        ? -1
        : a[0].toLowerCase() > b[0].toLowerCase()
        ? 1
        : 0
    )
    .map((arr) => arr.join(""));
}
```

### 다른 풀이 방법

1. files를 순회하며 String.match를 통해 매칭되는 문자열 기준으로 나눔
2. head의 문자열을 각각 대소문자 구분 없이 비교하여 정렬
3. 숫자를 오름차순 정렬

### 다른 풀이 코드

```javascript
function solution(files) {
  return files.sort((a, b) => {
    const [, headA, numberA] = a.match(/^(\D+)(\d+)/i);
    const [, headB, numberB] = b.match(/^(\D+)(\d+)/i);

    const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());
    if (headCompare !== 0) return headCompare;

    const numberCompare = parseInt(numberA) - parseInt(numberB);
    return numberCompare;
  });
}
```

### 회고

이 문제는 정규표현식 과 문자열 관련 메서드를 잘 알고 있으면 풀 수 있는 문제였다.
음... 각 자료별 내장 메서드를 모르면 풀기가 힘들듯 하다.
아무튼 잘 사용하지 않는 localeCompare과 match 메서드를 알게 됐으며 문자열 관련 문제에는 정규식을 알고 모르고의 차이가 크다는 것을 새삼 느꼈다.
