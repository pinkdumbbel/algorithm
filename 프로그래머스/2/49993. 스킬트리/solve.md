### 풀이 결과

품

### 내가 생각한 방법

1. skill_trees를 순회하며 skill에 없는 문자열을 제거 하여 새로운 배열을 만든다.
2. 가공된 스킬트리를 순회하며 skill의 순서와 맞는지 비교한다.

### 내 코드

```javascript
function solution(skill, skill_trees) {
  let answer = 0;

  const skills = skill.split("");
  const skillTrees = skill_trees.map((skillTree) =>
    skillTree
      .split("")
      .filter((skill) => skills.includes(skill))
      .join("")
  );

  skillTrees.forEach((st) => {
    let flag = true;

    st.split("").forEach((s, i) => {
      if (!flag) return;
      if (s !== skills[i]) {
        flag = false;
      }
    });

    if (flag) answer++;
  });

  return answer;
}
```

### 다른 풀이 방법

접근 자체는 내가 생각한 풀이와 비슷하다.
먼저 해당하지 않는 문자열을 제거하느냐 순회를 하며 제거 하느냐의 차이 이다.

### 다른 풀이 코드

```js
function solution(skill, skill_trees) {
  return skill_trees.filter((tree) =>
    skill.startsWith(
      tree
        .split("")
        .filter((s) => skill.includes(s))
        .join("")
    )
  ).length;
}
```

```js
function solution(skill, skill_trees) {
  var answer = 0;
  var regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => {
      return skill.indexOf(x) === 0 || x === "";
    }).length;
}
```

### 회고

문제 제출 후 다른사람 풀의를 보는데 정규식에 변수를 사용하는 방법에 대해 알게 되었다.
이 문제를 풀 때도 느꼈지만 문제를 좀 꼼꼼하게 살펴야 겠다는 생각이 든다... 다 이해한줄 알았는데 꼭 하나씩 잘못 알고 넘어가면 낭패를 본다...
