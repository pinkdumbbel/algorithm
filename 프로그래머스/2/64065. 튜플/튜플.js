function solution(s) {
  let combi = [];
  let tmp = [];

  s = s.substring(1, s.length - 1);

  for (const x of s) {
    if (x === "{") continue;

    if (x === "}") {
      combi.push(
        tmp
          .join("")
          .split(",")
          .filter((s) => !!s)
      );
      tmp = [];
    } else {
      tmp.push(x);
    }
  }

  combi = combi.sort((a, b) => a.length - b.length);
  const set = new Set();

  for (let i = 0; i < combi.length; i++) {
    for (let j = 0; j < combi[i].length; j++) {
      set.add(Number(combi[i][j]));
    }
  }

  return [...set];
}
