function solution(maps) {
    const answer = [];
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({length: rows}, () => Array.from({length: cols}, () => false));
    const ds = [[-1,0],[1,0],[0,-1],[0,1]];
    
    maps = maps.map((str) => str.split('').map((v) => v === 'X' ? v : Number(v)));
    
    for(let i = 0; i < rows; i++) {
        for(let j =0; j < cols; j++){
            const value = maps[i][j];
            if(value !== 'X' && !visited[i][j]) {
                const queue = [[i, j, value]];
                visited[i][j] = true;
                let sum = value;
                
                while(queue.length) {
                    const [cy, cx, food] = queue.shift();
                    
                    for(const [ny, nx] of ds) {
                        let my = ny + cy;
                        let mx = nx + cx;
                        
                        if(my < 0 || my >= rows || mx < 0 || mx >= cols) continue;
                        if(visited[my][mx]) continue;
                        if(maps[my][mx] === 'X') continue;
                        
                        visited[my][mx] = true;
                        queue.push([my, mx, food + maps[my][mx]]);
                        sum += maps[my][mx];
                    };
                };
                
                answer.push(sum);
            }
        }
    };
    
    if(!answer.length) return [-1];
    
    return answer.sort((a,b) => a-b);
}