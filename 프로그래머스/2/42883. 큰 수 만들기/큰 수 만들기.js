function solution(number, k) {
    const n = number.length;
    const stack = [];
    let removed = 0;
    
    for(let i = 0; i < n; i++) {
        const v = Number(number[i]);        
            
        while(stack[stack.length-1] < v && removed < k) {
            stack.pop();
            removed++;
        }  
        
        stack.push(v);
    };
    
    while(removed < k) {
        stack.pop();
        removed++;
    };
    
    return stack.join('');
}