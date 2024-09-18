function solution(ingredient) {
    var answer = 0;
    const hamburger = '1231'
    const n = hamburger.length;
    
    const stack = [];
    
    let lt = 0;
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(stack.length >= n){
            const sliced = stack.slice(-n).join('');
            
            if(sliced === hamburger){
                answer++;
                stack.splice(-n);
            }
        };
    };
    
    return answer;
}
