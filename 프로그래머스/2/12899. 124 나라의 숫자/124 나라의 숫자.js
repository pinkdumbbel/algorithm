function solution(n) {
    let answer = '';
    
    while(n >= 1) {
        answer += n%3 === 0 ? '4' : n%3;
        n = Math.ceil(n/3)-1;
    };
    
    return answer.split('').reverse().join('');
}
