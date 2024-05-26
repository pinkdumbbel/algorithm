function solution(t, p) {
    var answer = 0;
    
    let lp = 0;
    let rp = p.length;
    
    const tmp = [];
    
    while(true){
        const slice = t.slice(lp++, rp++);
        
        if(slice.length < p.length) break;
        else {
            tmp.push(slice);
        }
    };
    
    return tmp.filter((n) => Number(n) <= p).length;;
}