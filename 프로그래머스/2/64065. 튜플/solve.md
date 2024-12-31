### 풀이 결과

품

### 내가 생각한 방법

1. 주어진 문자열을 튜플의 배열로 형태로 변환
2. 조합을 길이에 따라 오름차순 정렬
3. 조합을 순회하며 중복이 되는 값은 넣지 않고 새로운 값만 추가

### 내 코드

```javascript
function solution(s) {
  const answer = [];
  let combi = [];
  let tmp = [];

  s = s.substring(1, s.length - 1);

  for (const x of s) {
    if (x === "{") continue;

    if (x === "}") {
      combi.push(
        tmp
          .join("")
          .split(",")
          .filter((s) => !!s)
      );
      tmp = [];
    } else {
      tmp.push(x);
    }
  }

  combi = combi.sort((a, b) => a.length - b.length);
  const set = new Set();

  for (let i = 0; i < combi.length; i++) {
    for (let j = 0; j < combi[i].length; j++) {
      set.add(Number(combi[i][j]));
    }
  }

  return [...set];
}
```

### 다른 풀이 방법

기본적인 풀이 방식은 비슷하다.
다만 문자열을 배열로 변경하는 과정에서 코드차이가 보여진다.

### 다른 풀이 코드

```javascript
function solution(s) {
  return s
    .slice(2, -2)
    .split("},{")
    .map((s) => s.split(",").map(Number))
    .sort((a, b) => a.length - b.length)
    .reduce((a, b) => [...a, ...b.filter((el) => !a.includes(el))], []);
}
```

### 회고

기본적으로 접근하는 방식은 다른 코드들과 비슷 한데
문자열을 나누는 부분에서 차이가 있었다.

나는 문자열을 순회하면서 {}일때 조건을 걸어서 처리를 했는데
다른 코드들은 보니 '},{'로 split으로 처리를 하였다. 훨씬 간단하게 처리가 가능 한 부분이였다ㅎ... 그리고 함수형으로 체이닝 하여 문제를 푸니 간지도 있어보인다...

또한 이번에 짜면서 느꼈는데 코드를 머리속으로 작성해봤자 크게 의미가 있나 싶다 단순히 큰 그림과 어떤식으로 접근 할지만 고민하고
디테일한 부분들은 코드의 출력 결과를 봐가면서 하는게 훨씬 나은 방법 인듯 하다.
다음 문제부터는 이런식으로 접근 해보려고 한다.
