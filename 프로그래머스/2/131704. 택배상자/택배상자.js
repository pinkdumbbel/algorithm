function solution(order) {
    let stack = [];
    let index = 0;
    let count = 0;
    
    for (let box = 1; box <= order.length; box++) {
        stack.push(box);
        
        while (stack.length && stack[stack.length - 1] === order[index]) {
            stack.pop();
            index++;
            count++;
        }
    }
    
    return count;
}
