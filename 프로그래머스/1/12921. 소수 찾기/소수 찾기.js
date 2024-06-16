function solution(n) {
    const tmp = [];
    
    for(let i = 2; i <=n; i++) {
        tmp[i] = i;
    }
    
    for(let i = 2; i <= n; i++) {
        if(tmp[i] === null) continue;
        
        for(let j = i*2; j <= n; j+=i) {
            tmp[j] = null;
        };
    };
    
    return tmp.filter(v => v !== null).length;
}