function solution(topping) {
    let answer = 0;
    const map = new Map();
    const set = new Set();
    
    topping.forEach((t) => {
        map.set(t, (map.get(t)??0)+1);
    });
    
    topping.forEach((t) => {
        set.add(t);
        map.set(t, map.get(t)-1);
        if(map.get(t) === 0) map.delete(t);
        
        if(set.size === map.size) answer++;
    });
    
    return answer;
}
