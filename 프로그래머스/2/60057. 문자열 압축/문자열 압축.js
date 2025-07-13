function solution(s) {
    let answer = Infinity;
    const len = s.length;
    
    for(let i = 1; i <= len; i++) {
        const stack = [];
        let cnt = 1;
        
        for(let j = 0; j < len; j+=i){
            const sliced = s.slice(j, j+i);
            
            if(stack.length) {
                if(stack[stack.length-1] === sliced) {
                    cnt++;
                } else {
                    stack[stack.length-1] = `${cnt === 1 ? '' : cnt}${stack[stack.length-1]}`;
                    stack.push(sliced);
                    cnt = 1;
                }
            } else {
                stack.push(sliced);
            }
        }; 
        stack[stack.length-1] = `${cnt === 1 ? '' : cnt}${stack[stack.length-1]}`;
        
        answer = Math.min(answer, stack.join('').length);
    };
    
    return answer;
}
