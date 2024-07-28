function solution(s) {
    let answer = 0;
    let stack = [];
    
    for(const x of s) {
       stack.push(x);
      
       const same = stack.filter((s) => stack[0] === s).length
       const diff = stack.filter((s) => stack[0] !== s).length
       
       if(same === diff) {
           answer++;
           stack = [];
       };
    }
    
    if(stack.length > 0) answer++;
    
    return answer;
}