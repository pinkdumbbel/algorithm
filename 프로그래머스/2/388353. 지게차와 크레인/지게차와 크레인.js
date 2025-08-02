function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;
    
    storage = storage.map((row) => row.split(''));
    const ds = [[-1,0], [1,0], [0,-1],[0,1]];
    
    const bfs = (target) => {
        const queue = [];
        const visited = Array.from({length: n}, () => Array.from({length: m}).fill(false));
        
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(i === 0 || i === n-1 || j === 0 || j === m-1) {
                    if(storage[i][j] === target) {
                        storage[i][j] = null;
                        visited[i][j] = true;
                    } else if(storage[i][j] === null && !visited[i][j]) {
                        queue.push([i, j]);
                        visited[i][j] = true;
                    }
                }
            }
        }
        
        while(queue.length) {
            const [y, x] = queue.shift();
            
            for(const [dy, dx] of ds) {
                const ny = y + dy;
                const nx = x + dx;
                
                if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if(visited[ny][nx]) continue;
                
                visited[ny][nx] = true;
                
                if(storage[ny][nx] === target) {
                    storage[ny][nx] = null;
                } else if(storage[ny][nx] === null) {
                    queue.push([ny, nx]);
                }
            }
        }
    };
    
    for( const request of requests) {
        if(request.length === 2) {
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < m; j++) {
                    const v = storage[i][j];
                    if(v === request[0]) storage[i][j] = null;
                }
            }           
        } else {
            bfs(request);
        } 
    };
    
    return storage.flat().filter(v => v !== null).length;
}