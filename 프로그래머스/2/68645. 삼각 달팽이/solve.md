### 풀이 결과

품(힌트를 얻어서)

### 내가 생각한 방법

1. 아래 -> 오른쪽 -> 위 순서대로 숫자를 채우며 순회한다.
2. 루트 루프 한번 순회할때 세방향 순회를 하므로 다음 순회때는 3씩 감소시킨다.
3. 답 도출

### 내 코드

```js
function solution(n) {
  const answer = Array.from({ length: n }, () => new Array(n).fill(0));
  let num = 1;
  let x = 0,
    y = 0;

  for (let i = n; i > 0; i -= 3) {
    for (let down = 0; down < i; down++) answer[y++][x] = num++;
    y--;
    x++;

    for (let right = 0; right < i - 1; right++) answer[y][x++] = num++;
    y--;
    x -= 2;

    for (let u = 0; u < i - 2; u++) answer[y--][x--] = num++;
    y += 2;
    x++;
  }

  return answer.flat().filter((v) => v > 0);
}
```

### 다른 풀이 방법

기본적인 풀이 방식은 비슷하다.
하지만 좌표값의 초기화 및 증감연산의 위치를 조절하니 더욱 깔끔한 코드가 되었다.

### 다른 풀이 코드

```js
function solution(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  let row = -1;
  let col = 0;
  let fill = 0;
  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
  }
  return a.flat();
}
```

### 회고

처음에 어떤 규칙이 존재하는줄 알고 특정 알고리즘으로 풀려고 계속 해봤는데
아무리 봐도 규칙도 안보여서 GPT에게 물어보니 세방향을 차례대로 순회하며 값을 채우는 방법으로 알려주어
풀게 되었다. 이런 류의 문제를 풀때 증감연산을 좀 자제하고 싶은데 생각보다 머리에서 잘 안떠오른다...
