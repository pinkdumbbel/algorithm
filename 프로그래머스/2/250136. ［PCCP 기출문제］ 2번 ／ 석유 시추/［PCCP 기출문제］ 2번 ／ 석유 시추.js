function solution(land) {
    const rows = land.length;
    const cols = land[0].length;
    
    const ds = [[1,0], [-1,0], [0,1], [0,-1]];
    const visited = Array.from({length: rows}, () => Array.from({length: cols}).fill(false));
    const group = Array.from({length: rows}, () => Array.from({length: cols}).fill(-1));
    
    const groupCnt = [];
    let groupId= 0;
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(visited[i][j] || !land[i][j]) continue;

            let cnt = 1;
            const queue = [[i, j]];
            visited[i][j] = true;
            group[i][j] = groupId;
            
            while(queue.length) {
                const [cy, cx] = queue.shift();
                
                for(const [dy, dx] of ds) {
                    const my = cy + dy;
                    const mx = cx + dx;
                    
                    if(my < 0 || my >= rows || mx < 0 || mx >= cols) continue;
                    if(visited[my][mx] || !land[my][mx]) continue;
                    
                    cnt++;
                    visited[my][mx] = true;
                    group[my][mx] = groupId;
                    queue.push([my, mx]);
                };
            };
            
            groupCnt[groupId++] = cnt;
        };
    };
    
    let answer = 0;
    for(let col = 0; col < cols; col++) {
        const set = new Set();
        for(let row = 0; row < rows; row++) {
            if(group[row][col] > -1) {
                set.add(group[row][col]);
            }
        }
        
        let sum = 0;
        set.forEach((id) => {
            sum += groupCnt[id];
        });
        
        answer = Math.max(answer, sum);
    };
    
    return answer;
}