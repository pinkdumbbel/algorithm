function solution(weights) {
    let answer = 0;
    const map = new Map();
    const ratios = [1, 2/3, 2/4, 3/2, 3/4, 4/2, 4/3];
    
    for(const w of weights) {
        for(const r of ratios) {
            const target = w*r;
            if(map.has(target)) answer+=map.get(target);
        };
        
        map.set(w, (map.get(w)??0)+1);
    };
    
    return answer;
}