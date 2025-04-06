function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();

    tangerine.forEach((t) => {
        map.set(t, map.get(t) ? map.get(t)+1 : 1);
    });
    
    let sum = 0;
    for(const v of [...map.values()].sort((a,b) => b-a)) {
        sum += v;
        answer++;
        if(sum >= k) return answer;
    }
    
    return answer;
}
