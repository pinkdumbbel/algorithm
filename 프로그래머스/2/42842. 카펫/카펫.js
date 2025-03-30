function solution(brown, yellow) {
  const total = brown + yellow;
  let width, height;

  for (width = parseInt(total / 3); width >= 3; width--) {
    if (total % width == 0) {
      height = total / width;
      if ((width - 2) * (height - 2) === yellow) break;
    }
  }

  return [width, height];
}
