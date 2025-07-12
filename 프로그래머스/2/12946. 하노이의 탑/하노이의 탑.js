function solution(n) {
    const answer = [];
    
    const hanoi = (cnt, start = 1, end = 3, tmp =2) => {
        if(cnt === 1) {
            answer.push([start,end]);
            return;
        } else {
            hanoi(cnt-1, start, tmp, end);
            
            answer.push([start, end]);
            
            hanoi(cnt-1, tmp, end, start);
        };
    };
    
    hanoi(n);
    
    return answer;
}