function solution(s) {
    var answer = [...s].sort((a,b) => b.charCodeAt() - a.charCodeAt()).join('');
    
    
    return answer;
}