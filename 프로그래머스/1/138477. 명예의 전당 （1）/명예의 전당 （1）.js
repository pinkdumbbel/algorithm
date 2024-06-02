function solution(k, score) {
    const answer = [];
    const tmp = [];
    
    for(let i = 0; i < score.length; i++) {
        const s = score[i];
        
        tmp.push(s);
        tmp.sort((a,b) => a-b);
        
        if(tmp.length > k) {
            tmp.shift();
        };
        
        answer.push(Math.min(...tmp));
    };
    
    return answer;
}