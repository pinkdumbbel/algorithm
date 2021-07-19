function solution(arr, k) {
    let answer = 0, sum = 0;

    for (let i = 0; i < k; i++) sum += arr[i];
    answer = sum;

    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        answer = Math.max(sum, answer);
    }

    return answer;
}

input = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(input, 3));
