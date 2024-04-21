function solution(...args) {
    var answer = 0;
    const set = new Set(args);
    const size = set.size;
    
    if(size === 1) {
        return args[0] * 1111;
    } else if(size === 2) {
        const [p, q] = [...set];
        const n = args.filter((n) => n === p).length;
        
        if(!(n % 2)) {
            return (p+q) * Math.abs(p-q);
        } else {
            const pp = n === 3 ? p : q;
            const qq = n === 1 ? p : q;
            
            return (10 * pp + qq) ** 2
        };
        
    } else if(size === 3) {
        let mult = 1;
        for(const x of set.values()){
            const n = args.filter(e => e === x).length;
            if(n === 1) {
                mult *= x;   
            }
        }
        return mult;
    } else {
        return Math.min(...[...set]);
    };
    
    return answer;
}