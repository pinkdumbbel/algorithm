function solution(arr) {
    var answer = arr.filter((n) => n !== Math.min(...arr));
    return answer.length ? answer : [-1];
}