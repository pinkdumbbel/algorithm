### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

그리디로 해결
정렬 한 다음 현재 타겟의 시작점이 끝점 보다 크면 미사일이 추가로 필요하다고 판단

### 다른 풀이 코드

```js
function solution(targets) {
  let answer = 0;
  targets.sort((a, b) => a[1] - b[1]);

  let p = 0;

  for (let i = 0; i < targets.length; i++) {
    const [s, e] = targets[i];

    if (s >= p) {
      answer++;
      p = e;
    }
  }

  return answer;
}
```

### 회고

되게 간단한 문제였는데 오히려 너무 복잡하게 생각했던거 같다...
