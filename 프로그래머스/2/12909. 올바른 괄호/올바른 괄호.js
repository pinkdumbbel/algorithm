function solution(s){
    const stack = [];
    
    for(const x of s) {
        
        if(x === ')') {
            stack.length ? stack.pop() : stack.push(x)
        } else{
            stack.push(x);
        }
    };
    
    return stack.length === 0;
}