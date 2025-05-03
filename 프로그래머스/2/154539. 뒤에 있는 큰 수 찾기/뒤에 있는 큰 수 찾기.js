function solution(numbers) {
    const answer = []; 
    const stack = [];
    const n = numbers.length;
    
    for(let i = 0; i < n; i++) {
        while(stack.length && numbers[stack[stack.length-1]] < numbers[i]) {
            answer[stack[stack.length-1]] = numbers[i];
            stack.pop();
        }
        
        stack.push(i);
    };
    
    while(stack.length) {
        const i = stack.pop();
        answer[i] = -1;
    };
    
    return answer;
}
