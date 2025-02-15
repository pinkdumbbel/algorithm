function solution(order) {
    let answer = 0;
    
    order.reverse();
    const n = order.length;
    const box = Array.from({length: n}, (_, i) => n-i);
    const stack = [];
    
    let o = order.pop();
    
    while(box.length) {
        const b = box.pop();
        
        if(b === o) {
            answer++;
            o = order.pop();
        } else {
            while(stack[stack.length-1] === o) {
                answer++
                stack.pop();
                o = order.pop();
            };
            
            stack.push(b);
        };
    };
    
    while(stack.length && stack[stack.length-1] === o) {
        answer++
        stack.pop();
        o = order.pop();
    };
    
    return answer;
}