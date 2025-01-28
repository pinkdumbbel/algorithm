function solution(n, t, m, p) {
    let answer = '';
    let cnt = 0;
    let turn = 0;
    
    while(answer.length !== t) {
        const c = (cnt++).toString(n).toUpperCase();
        
        for(const s of c) {
            if((turn++%m) === p-1) {
                answer+=s;
            };
            
            if(answer.length === t) return answer;
        };
    };
    
    return answer;
}
