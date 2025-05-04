function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    const stack = [];
    
    for(let i = 0; i < n; i++) {
        const current = prices[i];
        
        if(prices[stack[stack.length-1]] > current) {
            while(stack.length && prices[stack[stack.length-1]] > current) {
                const idx = stack.pop();
                answer[idx]++;
            }
        } 
        
        for(const index of stack) {
            answer[index]++;
        }
        
        stack.push(i);
    };
    
    return answer;
}