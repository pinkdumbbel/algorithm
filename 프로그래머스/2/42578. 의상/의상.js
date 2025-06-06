function solution(clothes) {
  const hash = {};

  clothes.forEach(([_, type]) => {
    if (hash[type]) {
      hash[type]++;
    } else {
      hash[type] = 1;
    }
  });

  return Object.values(hash).reduce((a, b) => a + a * b, 1) - 1;
}
