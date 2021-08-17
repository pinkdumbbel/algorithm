function solution(arr, m) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(L, time, score) {
        if (time > m) return;

        if (L === arr.length) {
            answer = Math.max(answer, score);
        } else {
            DFS(L + 1, time + arr[L][1], score + arr[L][0]);
            DFS(L + 1, time, score);
        }
    }

    DFS(0, 0, 0);
    return answer;
}

//점수, 시간
let input = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
];
console.log(solution(input, 20));