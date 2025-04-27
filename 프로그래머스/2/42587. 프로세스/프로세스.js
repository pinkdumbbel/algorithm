function solution(priorities, location) {
    const queue = priorities.map((p, i) => ({
        index: i,
        priority: p
    }));
    
    let cnt = 1;
    
    while(true) {
        for(let i = 0; i < queue.length; i++) {
            if(!queue[i]) continue;
            
            const {index, priority} = queue[i];    
            
            if(!queue.some((q) => q && q.priority > priority)) {
                if(location === i) return cnt;    
                queue[i] = null
                cnt++;
            }
        };
    }
}