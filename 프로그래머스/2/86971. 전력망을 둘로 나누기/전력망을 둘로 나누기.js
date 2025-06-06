function solution(n, wires) {
    let answer = n; 
    const adjList = Array.from({ length: n + 1 }, () => []);
    
    for (const [a, b] of wires) {
        adjList[a].push(b);
        adjList[b].push(a);
    }
    
    for (const [a, b] of wires) {
        const visited = new Array(n + 1).fill(false);
        const queue = [a];
        visited[a] = true;
        let count = 1;
        
        while (queue.length) {
            const current = queue.shift();
            for (const next of adjList[current]) {
                if (next === b) continue; 
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    count++;
                }
            }
        }
        
        const diff = Math.abs(count - (n - count));
        if (diff < answer) answer = diff;
    }
    
    return answer;
}
