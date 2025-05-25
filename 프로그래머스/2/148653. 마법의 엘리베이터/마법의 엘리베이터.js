function solution(storey) {
    let answer = 0;
    
    while(storey > 0) {
        const current = storey%10;
        storey = Math.floor(storey/10);
        
        if(current > 5) {
            answer += 10-current;
            storey++;
        } else if(current < 5) {
            answer += current;
        } else {
            answer+=5
            if (storey % 10 >= 5) storey++;
        };
    };
    
    return answer;
}