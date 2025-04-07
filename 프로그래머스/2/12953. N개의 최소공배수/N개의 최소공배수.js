function solution(arr) {
  let answer = 0;
  const max = Math.max(...arr);
  let n = 2;

  while (true) {
    let flag = true;
    answer = max * n;

    arr.forEach((el) => {
      if (!flag) return;
      if (answer % el !== 0) flag = false;
    });

    if (flag) return answer;
    n++;
  }

  return answer;
}
