function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    
    tangerine.forEach((t) => {
        map.set(t, (map.get(t) ?? 0)+1);
        if(map.get(t) === k) return 1;
    });
    
    const sortedValues = [...map.values()].sort((a,b) => b-a);
    let sum = 0;
    
    for(const v of sortedValues) {
        sum+=v;
        answer++;
        if(sum >= k) return answer;
    };
    
    return answer;
}