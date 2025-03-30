function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2) answer++;

    n = parseInt(n / 2);
  }

  return answer;
}
