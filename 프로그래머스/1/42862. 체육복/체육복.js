function solution(n, lost, reserve) {
    const filteredLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    const filteredReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    let answer = n - filteredLost.length;
    
    const chk = Array.from({length: n+2}).fill(true);
    
    for(const l of filteredLost) {
        chk[l] = false;
    };
    
    for(const r of filteredReserve) {
        const [before,after] = [r-1, r+1];
        
        if(!chk[r]) {
            chk[r] = true;
            answer++;       
            continue;
        }
        
        if(!chk[before]) {
            chk[before] = true;
            answer++;    
            continue;
        }
        
        if(!chk[after]) {
            chk[after] = true;
            answer++;
            continue;
        }
    };
    
    return answer;
}