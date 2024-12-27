function solution(citations) {
  citations.sort((a, b) => b - a); // 내림차순 정렬
  const n = citations.length;

  for (let h = 0; h < n; h++) {
    if (citations[h] < h + 1) {
      return h;
    }
  }

  return n;
}
