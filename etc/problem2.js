function solution(arr, m) {
    let answer = 0;
    let lt = sum = 0;

    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        while (sum > m) sum -= arr[lt++];
        answer += (rt - lt + 1);
    }

    return answer;
}



//input = [10, 5, 2, 6];
input = [1, 3, 1, 2, 3];

console.log(solution(input, 1));