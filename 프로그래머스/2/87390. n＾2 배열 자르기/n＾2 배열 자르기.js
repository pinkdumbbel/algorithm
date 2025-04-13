function solution(n, left, right) {
    const answer = [];
    
    for(let i = left+1; i <= right+1; i++) {
        const q = Math.floor(i/n) //몫
        const r = i%n; //나머지
        
        if(r===0) {
            answer.push(q===0 ? 1 : n);
            continue;
        };
        
        if(r > q+1) {
            answer.push(r);
        } else {
            answer.push(q+1);
        }
    }
    return answer;
}