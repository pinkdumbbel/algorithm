function solution(cards) {
    const n = cards.length;
    const visited = Array(n).fill(false);
    const groups = [];
    
    cards = cards.map((n) => n-1);
    
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        
        let current = i;
        let group = 0;
        
        while(!visited[current]) {
            visited[current] = true;
            current = cards[current];
            group++;
        };
        
        groups.push(group);
    };
    
    groups.sort((a,b) => b-a);
    
    if(groups.length < 2) return 0;
    
    return groups[0] * groups[1]
}