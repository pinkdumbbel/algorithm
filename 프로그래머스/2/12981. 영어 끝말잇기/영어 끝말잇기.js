function solution(n, words) {
    const answer = [0,0];
    const map = new Map();
    
    map.set(words[0], true);
    
    for(let i = 1; i < words.length; i++) {
        const current = words[i];
        const prev = words[i-1]
        
        if(map.get(current) || current[0] !== prev[prev.length-1]) {
            const loser = !((i+1)%n) ? n : (i+1)%n;
            answer[0] = loser;
            answer[1] = Math.ceil((i+1)/n)
            return answer;
        }
        
        map.set(current, true);
    }
    
    return answer;
}