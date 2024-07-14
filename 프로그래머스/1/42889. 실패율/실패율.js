function solution(N, stages) { 
    let players = stages.length;
    const fail = [];
    
    for(let i = 1; i <= N; i++) {
        const cur = stages.filter((v) => v === i).length;
        fail.push([i, cur/players]);
        players -= cur;
    }
    
    return fail.sort((a,b) => b[1] - a[1]).map((v) => v[0]);
};