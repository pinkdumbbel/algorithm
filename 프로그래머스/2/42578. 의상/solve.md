### 풀이 결과

품 (힌트를 얻어서...)

### 내가 작성한 코드

```javascript
function solution(clothes) {
  var answer = 0;
  const map = new Map();

  clothes.forEach(([a, b]) => {
    map.set(b, map.get(b) ? map.get(b) + 1 : 1);
  });

  return [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
```

### 다른 풀이 코드

```js
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}
```

### 회고

처음 접근 했을때 조합의 케이스 인줄 알고 hash로 접근 할 생각을 못하고 재귀로 접근 하려고 했었다.
근데 아무리 생각을 해봐도 종류에 따라 카운팅을 안하는 방법이 떠오르지 않았다.

그래서 힌트를 얻고자 GPT한테 물어봤는데
종류별로 옷의 개수를 해쉬에 저장한 후에 hash의 키 마다 안입는 케이스를 고려해서 +1을 해주고
각 가지수를 모두 곱한 다음 모두 안입는 경우의수 1을 빼주면 된다는 힌트를 얻었다.
사실상 GPT가 다 풀어준 셈이다 ...

확실히 코테를 준비하면서 느껴지는건 문제를 보고 아 이건 이 알고리즘을 사용하면 되겠다 라는게 빠르게 판단이 되어야 되는듯 하다...
