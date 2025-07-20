### 풀이 결과

못품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

1. 재귀로 푸는 방법
2. 비트마스킹 으로 푸는 방법

### 다른 풀이 코드

```js
function solution(relation) {
  const rowCount = relation.length;
  const colCount = relation[0].length;

  // 조합 생성 함수
  // ex [[0], [1], [2], [3]] [[0,1], [0,2], [0,3], [1,2], [1,3], [2,3]] ...
  function getCombinations(arr, size) {
    if (size === 1) return arr.map((x) => [x]);

    const result = [];
    arr.forEach((fixed, index) => {
      //중복된 경우를 제외한 조합을 구성한다.
      //현재 요소는 고정으로 두고 다음 요소부터 새로 만든다
      /*
        fixed=0, rest=[1,2,3] → getCombinations([1,2,3], 1) 
        => combinations = [[0,1], [0,2], [0,3]]

        fixed=1, rest=[2,3] → getCombinations([2,3], 1) 
        => combinations = [[1,2], [1,3]]

        fixed=2, rest=[3] → getCombinations([2,3], 1) 
        => combinations = [[2,3]]

        fixed=3, rest=[] → getCombinations([], 1)
        => combinations = []
      */
      const rest = arr.slice(index + 1);
      const combinations = getCombinations(rest, size - 1);
      combinations.forEach((combination) => {
        result.push([fixed, ...combination]);
      });
    });

    return result;
  }

  //후보키를 담을 리스트 선언
  const candidateKeys = [];

  // 첫번쨰 컬럼부터 마지막 컬럼까지 모든 크기의 조합 확인
  for (let size = 1; size <= colCount; size++) {
    const columns = Array.from({ length: colCount }, (_, i) => i);
    const combinations = getCombinations(columns, size);

    for (let combo of combinations) {
      // 최소성 검사
      let isMinimal = true;
      for (let key of candidateKeys) {
        //현재 후보키 리스트에 있는 모든 요소들이 조합에 포함되면 최소성 X
        /*
          예를들어
          candidateKeys = [[0], [1,2]]
          combos = [0,1,2,3]

          [0]의 경우(첫번쨰 컬럼만 후보키)에 모든 요소가 combos에 포함되어 있으므로 최소성 기준에 적합하지 않음
          [1,2]의 경우(2+3번재 키 조합의 후보키)에도 모든 요소가 combos에 포함되어 있으므로 최소성 기준에 적합하지 않음
        */
        if (key.every((k) => combo.includes(k))) {
          isMinimal = false;
          break;
        }
      }

      if (!isMinimal) continue;

      // 유일성 검사
      const tuples = new Set();
      let isUnique = true;

      for (let i = 0; i < rowCount; i++) {
        let tuple = combo.map((col) => relation[i][col]).join(",");

        if (tuples.has(tuple)) {
          isUnique = false;
          break;
        }

        tuples.add(tuple);
      }

      if (isUnique) {
        candidateKeys.push(combo);
      }
    }
  }

  return candidateKeys.length;
}
```

```js
function solution(relation) {
  let column = relation[0].length;
  let row = relation.length;
  let count = 0;
  let bitMaskList = [];

  // 컬럼 조합 경우의 수 (2^column) 만큼 순회
  for (let i = 1; i < 1 << column; ++i) {
    let keySet = new Set();

    //릴레이션 에서 후보키 가능여부 체크
    for (let j = 0; j < row; ++j) {
      let key = "";
      for (let k = 0; k < column; ++k) {
        /*
          선택된 속성 체크
          ex. i = 5 (0101) 일때
          k = 0: 5 & 1 = 0101 & 0001 = 0001 ≠ 0 → true (0번째 속성 선택됨)
          k = 1: 5 & 2 = 0101 & 0010 = 0000 = 0 → false (1번째 속성 선택 안됨)  
          k = 2: 5 & 4 = 0101 & 0100 = 0100 ≠ 0 → true (2번째 속성 선택됨)
          k = 3: 5 & 8 = 0101 & 1000 = 0000 = 0 → false (3번째 속성 선택 안됨)

          0번째 두번째 컬럼의 값으로 키 생성
        */
        if ((i & (1 << k)) != 0) key += relation[j][k];
      }
      keySet.add(key);
    }

    //key의 사이즈가 row의 사이즈와 같으면 중복이 없는키 즉 유니크한 값인지 체크
    //duplcateCheck로 최소성 판별
    if (keySet.size == row && duplcateCheck(bitMaskList, i)) ++count;
  }

  return count;
}

function duplcateCheck(list, key) {
  let size = list.length;
  /*
      최소성 확인 로직 비트연산으로 부분집합 체크

      list = [1], key = 6 인 경우에
      0001 & 0110 => 0000 => 0 이므로 패스 하고 bitMaskList에 push
      bitMaskList -> [1, 6]

      list = [1, 6], key = 7 인 경우에
      0001 & 0111 => 0001 => 1 이므로 1이 7의 부분집합 이므로 false가 리턴된다.
  */
  for (let i = 0; i < size; ++i) {
    if ((list[i] & key) == list[i]) return false;
  }
  list.push(key);
  return true;
}
```

### 회고
