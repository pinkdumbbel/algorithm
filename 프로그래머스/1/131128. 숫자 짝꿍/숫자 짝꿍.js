function solution(X, Y) {
    let answer = '';
    
    X = [...X].sort((a,b) => Number(b) - Number(a));
    Y = [...Y].sort((a,b) => Number(b) - Number(a));
    
    const xMap = new Map();
    const yMap = new Map();
    
    for(const x of X) {
        const m = xMap.get(x);
        
        if(m) {
            xMap.set(x, m+1);
        } else {
            xMap.set(x, 1);
        }
    };
    
    for(const y of Y) {
        const x = xMap.get(y);
        
        if(x) {
            answer += y;
            xMap.set(y, x-1);
        };
    };
    

    if(answer[0] === '0') return '0'
    
    return answer || '-1'
}