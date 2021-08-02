function solution(arr) {
    let answer = arr;
    let idx, tmp;

    for (let i = 0; i < arr.length; i++) {
        idx = i;
        tmp = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        arr[i] = arr[idx];
        arr[idx] = tmp;
    }
    return answer;
}
const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

