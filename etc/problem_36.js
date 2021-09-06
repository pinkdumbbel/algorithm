function solution(arr, k, m) {
    let answer = 0;

    function DFS(L, s, sum) {
        if (L === k) {
            if (sum % m === 0) answer++;
        }
        else {
            for (let i = s; i < arr.length; i++) {
                DFS(L + 1, i + 1, sum + arr[i]);
            }
        }
    }

    DFS(0, 0, 0);

    return answer;
}
let input = [2, 4, 5, 8, 12];
console.log(solution(input, 3, 6));