function solution(dirs) {
    let current = [0,0];
    const dir = {
        U: [0,1],
        D: [0,-1],
        R: [1,0],
        L: [-1,0]
    };
    const set = new Set();
    
    for(const d of dirs) {
        const [x,y] = dir[d];
        const [cx, cy] = current;
        const [mx ,my] = [cx+x, cy+y];
        
        if(Math.abs(mx) > 5 || Math.abs(my) > 5) continue;
        
        set.add(`${cx}${cy}${mx}${my}`);
        set.add(`${mx}${my}${cx}${cy}`);

        
        current = [mx, my];
    };
    
    return set.size/2;
}

