function solution(arr, m) {
    let answer = [];
    let tmp = Array.from({ length: m }, () => 0);
    let ch = Array.from({ length: arr.length }, () => 0);

    console.log(ch);

    function DFS(L) {
        if (L === m) {
            answer.push([...tmp]);
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L + 1);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}
let input = [3, 6, 9];

console.log(solution(input, 2));