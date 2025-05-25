function solution(sequence, k) {
    let answer = [0,Number.MAX_SAFE_INTEGER];
    
    const n = sequence.length;
    const queue = [];
    
    let p = sum = 0;
    
    for(let i = 0; i < n; i++) {
        const current = sequence[i];
        sum += current;
        queue.push(i);
        
        while(sum > k) {
            sum -= sequence[queue[p++]];
        };
        
        if(sum === k) {
            const a = answer[1]-answer[0];
            const b = queue[queue.length-1]-queue[p];
            
            if(a > b) {
                answer = [queue[p], queue[queue.length-1]]
            }
        };
    };
    return answer;
}
