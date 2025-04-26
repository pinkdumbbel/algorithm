function solution(k, dungeons) {
  let answer = 0;

  const n = dungeons.length;
  const chk = Array(n).fill(false);

  const recur = (hp, cnt) => {
    answer = Math.max(cnt, answer);
      
    for (let i = 0; i < n; i++) {
        if (!chk[i] && dungeons[i][0] <= hp) {
          chk[i] = true;
          recur(hp-dungeons[i][1], cnt+1);
          chk[i] = false;
        }
      }
  };

  recur(k, 0);

  return answer;
}
