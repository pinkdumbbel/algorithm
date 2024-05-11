function solution(a, b) {
    var answer = Math.min(a,b);
    const [num1, num2] = [a,b].sort((a,b) => a-b);
    
    for(let i =  num1+1; i <=num2; i++) {
        answer += i;
    }
    
    return answer;
}