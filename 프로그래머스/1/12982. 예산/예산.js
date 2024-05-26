function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a-b);
    
    let sum = 0;
    
    for(const x of d) {
        sum += x;
        
        if(sum > budget) return answer;
        
        answer++;
    };
    
    return answer;
}