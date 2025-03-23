function solution(number, k) {
    const arr = number.split('').map(Number);
    const n = arr.length;
    
    const stack = [];
    
    for(const num of arr){
        while(stack.length && num > stack[stack.length-1] && k>0) {
            stack.pop();   
            k--;
        };
        
        stack.push(num);        
    };
    
    if(stack.length === n) stack.pop();
    
    return stack.join('');
}