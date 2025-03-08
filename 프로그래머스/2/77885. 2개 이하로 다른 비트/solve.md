### 풀이 결과

못품

### 다른 풀이 방법

1. 정수를 2진수로 변환한다.
2. 2진수로 변환된 문자열에 맨앞에 0을 붙인다.
3. 2진수 문자열중 가장 마지막 0의 인덱스를 구한다.
4. 이 인덱스의 위치의 값을 1 다음값을 0 그 이후 나머지값은 그대로 유지한다.(비트 이동)

### 다른 풀이 코드

```javascript
function solution(numbers) {
  return numbers.map((n) => {
    if (n % 2 === 0) return n + 1;
    let binary = "0" + n.toString(2);
    const lastZero = binary.lastIndexOf("0");
    binary =
      binary.substring(0, lastZero) + "10" + binary.substring(lastZero + 2);
    return parseInt(binary, 2);
  });
}
```

### 회고

수학적 개념이 들어간 문제들은 접근하기가 매우 어려운듯 하다...
당연히 O(n^2)은 아닐듯 하여 생각을 해봐도 도저히 어떻게 접긍해야 할지 떠오르지가 않았다.
그래도 이번 문제에서 이런 개념이 있다는 것을 알았으니 비슷한 문제가 나오면 좀 비벼볼 수도 있을듯 하다...
