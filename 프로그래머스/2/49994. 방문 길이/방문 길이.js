function solution(dirs) {
    const set = new Set();
    const direction = {
        U: [1, 0],
        D: [-1, 0],
        R: [0, 1],
        L: [0, -1]
    }
    
    const current = [0,0];
    
    dirs.split('').forEach((d) => {
        const [cy, cx] = current;
        const [y, x] = direction[d];
        const move = [cy+y, cx+x];
        
        if(Math.abs(move[0]) > 5 || Math.abs(move[1]) > 5) return;    
    
        const [my, mx] = move;
        
        current[0] = my;
        current[1] = mx;
        
        set.add(`${cy}${cx}${my}${mx}`);
        set.add(`${my}${mx}${cy}${cx}`);
    });
    
    return set.size/2
}
