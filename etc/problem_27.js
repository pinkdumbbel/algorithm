function solution(arr) {
    let answer = 'NO', flag = 0, tot = arr.reduce((a, b) => a + b, 0);

    function DFS(i, sum) {
        if (flag) return;
        if (i === arr.length) {
            if ((tot - sum) === sum) {
                answer = 'YES';
                flag = 1;
            }
        }
        else {
            DFS(i + 1, sum + arr[i]);
            DFS(i + 1, sum);
        }
    }

    DFS(0, 0);

    return answer;
}

let input = [3, 1, 5, 6, 7, 10];
console.log(solution(input));