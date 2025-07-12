### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

1. 곡괭이별 소모 피로도 테이블 선언
2. 광물별 난이도를 구해서 그룹핑
3. 그룹핑된 리스트를 난이도 기준으로 내림차순 정렬
4. 곡괭이 종류별 개수를 인덱스로 변환
5. answer에 각 소모 피로도 누적

### 다른 풀이 코드

```js
function solution(picks, minerals) {
  let answer = 0;
  const scoreTable = {
    diamond: [1, 5, 25],
    iron: [1, 1, 5],
    stone: [1, 1, 1],
  };

  const total = picks.reduce((a, b) => a + b, 0) * 5;

  const groups = [];
  const maxMinerals = Math.min(total, minerals.length);

  for (let i = 0; i < maxMinerals; i += 5) {
    const group = minerals.slice(i, i + 5);

    let difficulty = 0;
    for (const x of group) {
      if (x === "diamond") {
        difficulty += 25;
      } else if (x === "iron") {
        difficulty += 5;
      } else {
        difficulty += 1;
      }
    }

    groups.push({ minerals: group, difficulty });
  }

  groups.sort((a, b) => b.difficulty - a.difficulty);

  const pickIdxs = [];
  for (let i = 0; i < picks[0]; i++) pickIdxs.push(0);
  for (let i = 0; i < picks[1]; i++) pickIdxs.push(1);
  for (let i = 0; i < picks[2]; i++) pickIdxs.push(2);

  for (let i = 0; i < groups.length && i < pickIdxs.length; i++) {
    const { minerals } = groups[i];
    const pickIdx = pickIdxs[i];

    for (const m of minerals) {
      answer += scoreTable[m][pickIdx];
    }
  }

  return answer;
}
```

### 회고
