function solution(k, dungeons) {
    let answer = 0;
    const n = dungeons.length;
    
    function dfs(hp, visited = new Set(), cnt = 0) {
        answer = Math.max(cnt, answer);
        
        for(let i = 0; i < n; i++) {
            if(!visited.has(i) && hp >= dungeons[i][0]) {
                visited.add(i);
                dfs(hp-dungeons[i][1], visited, cnt+1);
                visited.delete(i);
            };
        };    
    }
    
    dfs(k);
    
    return answer;
}

