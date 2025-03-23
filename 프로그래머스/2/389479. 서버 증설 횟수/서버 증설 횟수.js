function solution(players, m, k) {
    let answer = 0;
    const n = players.length;
    const servers = Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        const p = players[i];
        const server = parseInt(p/m)-servers[i];
        
        if(server > 0) {
            for(let j = i; j < i+k; j++) {
                servers[j] += server; 
            };
            
            answer += server;
        };
    };
    
    return answer;
}