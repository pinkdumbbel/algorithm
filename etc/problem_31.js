function solution(arr, m) {
    let answer = Number.MAX_SAFE_INTEGER;

    function DFS(L, sum) {
        if (sum > m) return;
        if (L >= answer) return;
        if (sum === m) {
            answer = Math.min(answer, L);
        } else {
            for (let i = 0; i < arr.length; i++) {
                DFS(L + 1, sum + arr[i]);
            }
        }
    }

    DFS(0, 0);

    return answer;
}

let input = [1, 2, 5];

console.log(solution(input, 15));