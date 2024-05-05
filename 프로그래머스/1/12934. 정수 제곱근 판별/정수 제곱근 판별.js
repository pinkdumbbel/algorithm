function solution(n) {
    const sqrt = Math.sqrt(n);
    var answer = Number.isInteger(sqrt) ? (sqrt+1) * (sqrt+1) : -1;
    return answer;
}