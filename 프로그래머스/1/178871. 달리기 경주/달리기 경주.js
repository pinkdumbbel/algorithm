function solution(players, callings) {
    const map = new Map();
    
    players.forEach((p, index) => {
        map.set(p, index);
    });
    
    callings.forEach((c) => {
        const idx = map.get(c);
        const tmp = players[idx-1];
        
        players[idx] = tmp;
        players[idx-1] = c;
        
        map.set(c,idx-1);
        map.set(tmp, idx);
    });
    
    return players;
}