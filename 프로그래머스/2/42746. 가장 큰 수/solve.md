### 풀이 결과

품 (힌트를 얻어서)

### 내가 생각한 방법

1. 배열의 모든 값을 문자열로 변환
2. 문자열을 이어 붙였을때 큰 숫자 기준으로 내림차순 정렬
3. 정렬된 배열을 이어붙인 문자열로 변환
4. 맨 앞 자리가 0 이면 0 을 아니면 answer를 반환

### 내 코드

```javascript
function solution(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join("");

  return Number(answer[0]) > 0 ? answer : "0";
}
```

### 다른 풀이 방법

내 풀이와 동일

### 다른 풀이 코드

```javascript
function solution(numbers) {
  const result = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
```

### 회고

문자열을 이어붙인 값으로 비교해야 된다는 힌트를 얻고 정답을 받았다... 사실상 틀렸다고...
아무튼 다른 정답을 보면 Number로 치환하지 않고 바로 정렬을 해서 처리 하는데 다른 부분은 그 뿐이다.
