function solution(arr, m) {
    let answer = 0;
    let p1 = 0;
    let p2 = 1;
    let sum = 0;

    while (p1 < arr.length) {
        sum += arr[p1++];
        if (sum >= m) {
            (sum === m) && answer++;
            sum = 0;
            p1 = p2++;
        }
    }

    return answer;
}

input = [5, 2, 3, 8, 9, 1, 4, 1, 1];
console.log(solution(input, 10));