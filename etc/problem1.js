function solution(arr, m) {
    let answer = 0, lt = 0, sum = 0;

    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === m) answer++;
        while (sum >= m) {
            sum -= arr[lt++];
            if (sum === m) answer++;
        }
    }

    return answer;
}

input = [5, 2, 3, 8, 9, 1, 4, 1, 1];
console.log(solution(input, 10));