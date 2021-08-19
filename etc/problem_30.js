function solution(n, m) {
    let answer = [];
    let tmp = Array.from({ length: n - 1 });

    function DFS(L) {
        if (L === m) {
            answer.push([...tmp]);
        } else {
            for (let i = 1; i <= n; i++) {
                tmp[L] = i;
                DFS(L + 1);
            }
        }
    }

    DFS(0);

    return answer;
}

console.log(solution(4, 3));