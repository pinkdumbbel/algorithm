### 풀이 결과

못품 (손도 못댐...)

### 다른 풀이 방법

행의 기준이 되는 arr1배열을 순회하면서
열의 기준이 되는 arr2의 요소 배열을 순회한다. (요소는 필요 없고 arr2의 개수 즉 열의 개수만큼 도는게 중요)

각행(arr1배열의 요소배열arr[0], arr[1], arr[2])을 순회하면서 arr2의 각 열의 요소들의 곱의 합을 누적한다.

### 다른 풀이 코드

```javascript
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}
```

### 회고

처음엔 호기롭게 접근 했다. 그냥 행과 열을 곱하면 되는거 아닌가 했는데
풀다보니 행과 열을 어떻게 곱할것이며 어떻게 곱한 값을 결과가 되는 위치에 나열 해야 하지 라는 어려움이 생겼다.

답을 보니

1. arr1배열을 맵을 돌려 새로운 배열을 만듦
2. 열만큼 돌기위해 arr2[0]를 순회
3. arr1의 각 행을 reduce를 통해 arr2의 열과 곱해 누적해서 해당 행열의 값을 구한다.

위 과정으로 풀이 되었고 열만큼 순회 하면서 rows의 값을 누적한다는 아이디어가 참 좋았다...
꾸준히 연습해서 이런 문제들도 잘 풀어 나가야 겠다...
