### 풀이 결과

품

### 내 풀이 방법

정규식으로 skill에 해당하는 문자열만 남기고 제거 했을때 그 문자열이 주어진 스킬트리에 시작하는 문자열인지 확인

### 내 풀이 코드

```js
function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((tree) => tree.replace(regex, ""))
    .filter((tree) => skill.startsWith(tree)).length;
}
```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(skill, skill_trees) {
  function isCorrect(n) {
    let test = skill.split("");
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
```

### 회고

동적 변수를 정규식으로 표현 하는 방법에 대해 알게 됐다 유용하게 쓸듯
