function solution(arr) {
    let answer = 0;
    let et = 0;
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });

    for (let i = 0; i < arr.length; i++) {
        if (et <= arr[i][0]) {
            et = arr[i][1];
            answer++;
        }
    }

    return answer;
}


/* let arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
]; */

const arr = [
    [3, 3],
    [1, 3],
    [2, 3]
];

console.log(solution(arr));