function solution(arr1, arr2) {
  return arr1.map((rows) =>
    arr2[0].map((_, row) =>
      rows.reduce((a, b, col) => a + b * arr2[col][row], 0)
    )
  );
}
