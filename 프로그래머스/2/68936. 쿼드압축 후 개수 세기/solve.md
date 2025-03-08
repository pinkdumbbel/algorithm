### 풀이 결과

못품

### 내가 생각한 방법

1. 순회를 할 카운트를 지정하고 1부터 4배씩 증가하면서 (arr의 length)^2 보다 작을때 까지 순회
2. 내부에서 cnt만큼 다시 순회
3. 내부에서 arr의 내부 요소들 순회
4. 내부 요소들을 순회하면서 값이 모두 같으면 해당 하는 값의 answer를 증가
5. 다르면 for문 break;
6. 이후 반복 (쪼개진 이후의 순회할 인덱스를 구하기가 어려워서 포기)

### 다른 풀이 방법

1. 왼쪽 위 / 오른쪽 위 / 왼쪽 아래 / 오른쪽 아래 씩 4개의 영역을 나눠 재귀 호출
2. 더이상 쪼갤 수 없거나 한 구역에 모든값이 같은 경우 재귀를 종료한다.
3. 모든 값이 같은 경우에는 재귀를 호출할 당시의 x,y좌표 값에 해당하는 answer의 값을 증가시킨다.

### 다른 풀이 코드

```javascript
function solution(arr) {
  const answer = [0, 0];

  function recur(x, y, len) {
    const value = arr[y][x];
    let same = true;

    for (let i = y; i < y + len; i++) {
      for (let j = x; j < x + len; j++) {
        if (value === arr[i][j]) {
        } else {
          same = false;
          break;
        }
      }

      if (!same) break;
    }

    if (same) {
      answer[value]++;
    } else {
      const newLen = len / 2;

      recur(x, y, newLen);
      recur(x + newLen, y, newLen);
      recur(x, y + newLen, newLen);
      recur(x + newLen, y + newLen, newLen);
    }
  }

  recur(0, 0, arr.length);

  return answer;
}
```

### 회고

처음에 while문으로 시도를 했는데 하다보니 좌표값이 계속 변경되는 케이스가 증가한다는 것을 알았고 while로 풀 수 없다는 것을 직감했다.
그래서 다른 풀이들을 참조 했는데 모두 재귀를 사용해서 풀었다.
컨셉은 한 구역별로 쪼개질수 없는 범위(1\*1배열) 까지 쪼갠 이후에 해당 구역의 요소에 대한 카운트를 하는 것이다.
이 문제를 풀고 나서 재귀가 dfs/bfs와 같은 알고리즘 뿐 아니라 이런식으로 반복문을 쓰는데 동적으로 반복문의 개수가 늘어 날 필요가 있을때도 사용해야 된다는 것을 느꼈다. 원래도 이 부분은 어렴풋이 파악하고 있었지만 실제로 문제로 해결하니 확실히 더 와닿는듯 하다.
