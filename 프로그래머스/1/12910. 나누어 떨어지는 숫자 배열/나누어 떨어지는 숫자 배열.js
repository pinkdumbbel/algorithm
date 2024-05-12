function solution(arr, divisor) {
    var answer = arr.sort((a,b) => a-b).filter((n) => !(n%divisor));
    
    
    return answer.length ? answer : [-1];
}