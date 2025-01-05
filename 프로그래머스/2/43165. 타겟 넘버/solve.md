### 풀이 결과

못품...

### 내가 생각한 방법

1. dfs로 푼다.
2. numbers만큼 순회하면서 numbers[i]의 값에 -1을 곱해준 후에 sum에 누적한다.
3. L >= numbers.length 일때 sum값이 target과 같으면 answer를 하나 증가한다.
4. 재귀가 끝난 후에 numbers[i]에 -1을 곱해 원복 시킨다.

### 내 코드

```javascript
function solution(numbers, target) {
  var answer = 0;
  const n = numbers.length;

  function dfs(L, sum) {
    if (L >= n) {
      if (sum === target) answer++;
      return;
    } else {
      for (let i = 0; i < n; i++) {
        numbers[i] = numbers[i] * -1;
        dfs(L + 1, numbers[L]);
        numbers[i] = numbers[i] * -1;
      }
    }
  }

  dfs(0, 0);
  return answer;
}
```

### 다른 풀이 방법

1. 재귀를 뻗으면서 현재 숫자를 더하는 경우의수와 빼는 경우의 수를 구해 더한다.
2. 재귀의 뎁스가 numbers.length인 경우 sum과 target을 확인하여 같으면 1을 아니면 0을 반환한다.

### 다른 풀이 코드

```javascript
function solution(numbers, target) {
  function dfs(L, sum) {
    if (L === numbers.length) {
      return sum === target ? 1 : 0;
    }

    return dfs(L + 1, sum + numbers[L]) + dfs(L + 1, sum - numbers[L]);
  }

  return dfs(0, 0);
}
```

### 회고

확실히 재귀로 풀어야 되는 문제가 나오면 딱 보기에는 덤빌만 한거 같은데
항상 풀어보면 개털린다... 재귀는 일단 뒤로 미뤄놓고 나중에 집중적으로 풀어야 겠다...
이 문제도 내가 접근한 방법이 맞는줄 알았는데 전혀 다르다...
연속 세문제 다 못풀었는데 lv2도 쉽지 않음을 느낀다 꾸준히 해야 겠다.
