function solution(targets) {
    let answer = 0;
    targets.sort((a,b) => a[1] - b[1]);
    
    let p = 0;
    
    for(let i = 0; i < targets.length; i++) {
        const [s, e] = targets[i];
        
        if(s >= p) {
            answer++;
            p = e;
        }
    };
    
    return answer;
}