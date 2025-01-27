### 풀이 결과

못품

### 내가 생각한 방법

처음에는 5중 반복문으로 풀려고 했는데 카운팅과 문자 자리수를 컨트롤 하는게 여려웠고
재귀로 접근 해서 품 재귀로 푸는 방법 까진 접근 했지만 풀지 못함

### 다른 풀이 방법

재귀로 품
재귀를 뻗으면서 문자열의 길이가 5가 넘어가면 재귀를 종료해주고
문자열이 입력값과 같으면 플래그를 true로 변경해줘서 그 이후에 재귀들은 전부 종료 시킨다.

### 다른 풀이 코드

```javascript
function solution(word) {
  var answer = 0;
  const words = ["A", "E", "I", "O", "U"];
  const n = words.length;
  let flag = false;

  function dfs(s = "") {
    if (flag || s.length > n) return;

    if (s === word) {
      flag = true;
      return;
    }

    answer++;

    for (const w of words) {
      dfs(s + w);
    }
  }

  dfs();

  return answer;
}
```

### 회고

처음 작성 했던 코드는 종료조건이 s의 길이가 5일때 return 이였는데 생각해보니 이렇게 하면 무조건 5가 되어야지만 종료되는 문제가 있었다.
그부분만 어떻게 처리 했어도 답을 냈을듯 하다 아쉬운 부분이다.
그런데 가중치를 통해 푸는 방법도 있는데 이 문제는 도저히 이해가 안돼서 넘어가려고 한다.
나중에 다시 풀어볼때 가중치 방법에 대한 풀이도 같이 정의 할 예정이다.
