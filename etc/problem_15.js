function solution(arr) {
    let answer = arr;
    let tmp;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return answer;
}
const arr = [23, 5, 11, 7, 13, 15];
console.log(solution(arr));

