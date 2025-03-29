function solution(s){
    const stack = [];
    
    s.split('').forEach((el) => {
        if(stack.length && el === ')') {
            stack.pop();
        } else {
            stack.push(el);
        }    
    });
    
    return stack.length ? false : true;
}
