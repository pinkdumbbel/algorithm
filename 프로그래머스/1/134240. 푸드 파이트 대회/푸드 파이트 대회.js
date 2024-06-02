function solution(food) {
    var answer = '';
    const pushed = [];
    const unshfied = [];
    
    for(let i = 1; i < food.length; i++) {
        const n = food[i];
        if(n === 1) continue;
        
        for(j = 0; j < Math.floor(n/2); j++) {
            pushed.push(i);
            unshfied.unshift(i);
        }
    };
    
    
    return `${pushed.join('')}0${unshfied.join('')}`;
}