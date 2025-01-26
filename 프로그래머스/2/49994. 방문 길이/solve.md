### 풀이 결과

품 (도움을 받아서...)

### 내가 생각한 방법

1. 각 문자별로 방향을 지정 한다.
2. 현재 좌표에서 이동한 좌표를 구한다.
3. 이동한 좌표가 절대값 기준 5 보다 크면 건너 뛴다.
4. 현재 좌표에서 이동한 좌표를 저장 and 이동한 좌표에서 현재 좌표를 저장 (양방향)
5. 중복제거 후 /2

### 내가 작성한 코드

```javascript
function solution(dirs) {
  let current = [0, 0];
  const dir = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const set = new Set();

  for (const d of dirs) {
    const [x, y] = dir[d];
    const [cx, cy] = current;
    const [mx, my] = [cx + x, cy + y];

    if (Math.abs(mx) > 5 || Math.abs(my) > 5) continue;

    set.add(`${cx}${cy}${mx}${my}`);
    set.add(`${mx}${my}${cx}${cy}`);

    current = [mx, my];
  }

  return set.size / 2;
}
```

### 회고

처음 문제를 접근 했을때는 단방향만 고려해서 풀었다...
도대체 어떤 반례가 있어서 안풀린는 건지 답답해서 gpt에게 반례를 찾아달라고 했는데
양방향에 대한 고려가 없다는 힌트를 주었다. 그 힌트를 보고 풀었는데 이런류의 문제들을 마주 쳤을때 항상 예시에 나온
케이스만 고려를 하고 푸는것 같다... 꾸준하게 푸는게 답이겠지만 이런 케이스들이 참 눈에 보이지 않는다 ㅠㅠ
