function solution(n) {
    let answer = [];
    let ch = Array.from({ length: 4 }, () => 0);

    function DFS(v) {
        if (v > n) {
            let tmp = '';
            for (let i = 1; i < ch.length; i++) {
                if (ch[i] === 1) tmp += i + ' ';
            }
            tmp.length > 0 && answer.push(tmp.trim());
        } else {
            ch[v] = 1;
            DFS(v + 1);
            ch[v] = 0;
            DFS(v + 1);
        }
    }
    DFS(1);

    return answer;
}

console.log(solution(3));