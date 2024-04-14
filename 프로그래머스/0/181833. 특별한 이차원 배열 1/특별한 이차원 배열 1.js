function solution(n) {
    var answer = Array.from(Array(n), () => Array(n).fill(0));
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i === j) answer[i][j] = 1
        }    
    };
    
    console.log(answer);
    return answer;
}