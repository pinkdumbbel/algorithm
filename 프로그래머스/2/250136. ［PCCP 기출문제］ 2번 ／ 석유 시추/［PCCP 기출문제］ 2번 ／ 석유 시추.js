function solution(land) {
    let answer = 0;
    const rows = land.length;
    const cols = land[0].length;
    
    const ds = [[1,0], [-1,0], [0,1], [0,-1]];
    
    const bfs = (y, x) => {
        const queue = [[y, x]];
        const oil = [0, x, x];
        
        while(queue.length) {
            const [cy, cx] = queue.shift();
            if(!land[cy][cx]) continue;
            
            oil[0]++;
            land[cy][cx] = 0;
            
            if(oil[1] > cx) oil[1] = cx;
            if(oil[2] < cx) oil[2] = cx;
            
            for(const [dy, dx] of ds) {
                const my = cy + dy;
                const mx = cx + dx;
                
                if(my < 0 || my >= rows || mx < 0 || mx >= cols) continue;
                if(!land[my][mx]) continue;
                
                queue.push([my, mx]);
            }
        };
        
        return oil;
    };
    
    const values = Array.from({length: cols}).fill(0);
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(land[i][j]) {
                let [cnt, start, end] = bfs(i, j);
                while(start <= end) values[start++] += cnt;
            };
        }
    };
    
    return Math.max(...values);
}