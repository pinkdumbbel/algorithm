function solution(queue1, queue2) {
  let answer = 0;

  const total = queue1.concat(queue2).reduce((a, b) => a + b, 0);

  if (total % 2) return -1;

  const n = queue1.length;
  const mid = total / 2;

  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);

  let p1 = 0,
    p2 = 0;

  while (answer <= n * 3) {
    if (sum1 === sum2) return answer;

    if (sum1 > mid) {
      const v = queue1[p1++];
      sum1 -= v;
      sum2 += v;
      queue2.push(v);
    } else {
      const v = queue2[p2++];
      sum1 += v;
      sum2 -= v;
      queue1.push(v);
    }

    answer++;
  }

  return -1;
}
