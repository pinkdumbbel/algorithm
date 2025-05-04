function solution(order) {
    let answer = 0;
    
    const queue = Array(order.length).fill(0).map((_,i) => i+1);
    const stack = [];
    
    let qi = 0;
    let oi = 0;
    
    while(qi < order.length) {
        const box = queue[qi++];
        
        if(box === order[oi]) {
            answer++;
            oi++;
        } else {
            while(stack.length && stack[stack.length-1] === order[oi]) {
                answer++;
                oi++;
                stack.pop();
            }
            stack.push(box); 
        };    
    }
    
    while(stack.length) {
        if(order[oi] !== stack.pop()) return answer;
        
        answer++;
        oi++;
    }
    
    return answer;
}

/*


[4,3,2,1,5]
[1,2,3,4,5]

[4,5] [1,2,3];
[5] [1,2,3];

*/
