function solution(places) {
  const answer = [];
  const ps = [];
  const len = 5;

  for (let i = 0; i < len; i++) {
    const arr = [];
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (places[i][j][k] === "P") {
          arr.push([j, k]);
        }
      }
    }
    ps.push(arr);
  }

  for (let i = 0; i < len; i++) {
    const p = ps[i];
    const pLen = p.length;
    if (!p.length) {
      answer.push(1);
      continue;
    }

    let flag = 1;

    for (let j = 0; j < pLen; j++) {
      const [jy, jx] = p[j];

      for (let k = j + 1; k < pLen; k++) {
        const [ky, kx] = p[k];
        const dist = Math.abs(jy - ky) + Math.abs(jx - kx);

        if (dist === 1) {
          flag = 0;
          break;
        }

        if (dist < 3) {
          if (dist < 3) {
            // 같은 열 (세로로 2칸 떨어짐)
            if (kx === jx) {
              if (places[i][(ky + jy) / 2][kx] !== "X") {
                flag = 0;
                break;
              }
            }

            // 같은 행 (가로로 2칸 떨어짐)
            else if (ky === jy) {
              if (places[i][ky][(kx + jx) / 2] !== "X") {
                flag = 0;
                break;
              }
            }

            // 대각선 (L자 형태)
            else {
              if (places[i][jy][kx] !== "X" || places[i][ky][jx] !== "X") {
                flag = 0;
                break;
              }
            }
          }
        }
      }

      if (flag === 0) break;
    }

    answer.push(flag);
  }

  return answer;
}
