function solution(topping) {
    let answer = 0;
    const right = new Map();
    const left = new Set();
    
    topping.forEach((e) => {
        right.set(e, (right.get(e) ?? 0) + 1);    
    });
    
    topping.forEach((e) => {
        const cnt = right.get(e);
        right.set(e, cnt-1);
        left.add(e);
        
        if(right.get(e) === 0) {
            right.delete(e);    
        };
        
        if(left.size === right.size) {
            answer++
        }
    });
    
    return answer;
}