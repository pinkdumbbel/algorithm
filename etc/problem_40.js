function solution(n) {
    let answer = "";
    let tmp = [];
    tmp.push(1);

    while (tmp.length) {
        let v = tmp.shift();
        answer += v + " ";
        for (let nv of [v * 2, v * 2 + 1]) {
            if (nv > n) continue;
            tmp.push(nv);
        }
    }

    return answer;
}

console.log(solution(7));
