function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(L, sum) {
        if (sum > c) return;

        if (L === arr.length) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }

    DFS(0, 0);
    return answer;
}

let input = [81, 58, 42, 33, 61];
console.log(solution(259, input));