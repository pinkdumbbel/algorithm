### 풀이 결과

못 품

### 내 풀이 방법

### 내 풀이 코드

```js

```

### 다른 풀이 방법

### 다른 풀이 코드

```js
function solution(users, emoticons) {
  const ratios = [10, 20, 30, 40];
  const len = emoticons.length;
  let maxSubs = 0;
  let maxSales = 0;

  const discounts = [];

  const dfs = (L, arr) => {
    if (L === len) {
      discounts.push(arr);
      return;
    }

    for (let i = 0; i < ratios.length; i++) {
      dfs(L + 1, [...arr, ratios[i]]);
    }
  };

  dfs(0, []);

  for (const discountRates of discounts) {
    let subs = 0;
    let sales = 0;

    for (const [minRate, maxPrice] of users) {
      let sum = 0;

      for (let i = 0; i < len; i++) {
        const ePrice = emoticons[i];
        const discount = discountRates[i];

        if (discount >= minRate) {
          const disPrice = ePrice - ePrice * (discount / 100);
          sum += disPrice;
        }
      }

      if (sum >= maxPrice) subs++;
      else sales += sum;
    }

    if (subs > maxSubs || (subs === maxSubs && sales > maxSales)) {
      maxSubs = subs;
      maxSales = sales;
    }
  }

  return [maxSubs, maxSales];
}
```

### 회고

이 문제는 각 이모티콘별 할인율을 [10, 20, 30, 40]을 모두 적용하는 완전탐색 문제였다.
사실 완탐이가? 생각 했지만 아닌듯 해서 풀다가 못풀어서 ai에 물어보니 완탐이라고 해서 풀었다.
그런데 구독자와 판매액을 구하는 과정을 또 못구해서 못풀었다...
