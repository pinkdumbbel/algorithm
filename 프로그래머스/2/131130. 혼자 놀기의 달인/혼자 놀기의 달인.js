function solution(cards) {
    const n = cards.length;
    const check = Array(n).fill(false);
    cards = cards.map((n) => n-1);
    
    const bfs = (n) => {
        let cnt = 1;    
        const queue = [n];
        
        while(queue.length) {
            const card = queue.shift();
            
            if(check[card]) return cnt;
            
            check[card] = true;
            queue.push(cards[card]);
            cnt++;
        };
        
        return cnt;
    };
    
    const result = [];
    
    cards.forEach((n,i) => {
        check[i] = true;
        result.push(bfs(n));
    });
    
    result.sort((a,b) => b-a);
    
    if(result[0] === n) return 0;
    
    return result[0] * result[1];
}