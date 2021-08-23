function solution(n, r) {
    let answer;
    let arr = Array.from(Array(34), () => Array(34).fill(0));
    console.log(arr);
    function DFS(n, r) {
        if (arr[n][r] > 0) return arr[n][r];
        if (n === r || r === 0) return 1;
        else return arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    }

    answer = DFS(n, r);

    return answer;
}

console.log(solution(5, 3));