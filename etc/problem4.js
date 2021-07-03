function solution(arr) {
    let answer = '', max = Number.MIN_SAFE_INTEGER;
    let obj = {};

    for (v of arr) {
        if (obj[v] >= 1) obj[v] = obj[v] + 1;
        else obj[v] = 1;
    }

    for (const p in obj) {
        if (max < obj[p]) {
            max = obj[p];
            answer = p;
        }
    }

    return answer;
}

input = ['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C', 'B', 'D', 'E', 'D', 'E'];
console.log(solution(input));
