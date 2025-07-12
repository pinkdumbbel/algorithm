function solution(picks, minerals) {
    let answer = 0;
    const scoreTable = {
        diamond: [1, 5, 25],
        iron: [1, 1, 5],
        stone: [1, 1, 1],
    };
    
    const total = picks.reduce((a,b) => a+b,0) * 5;
    
    const groups = [];
    const maxMinerals = Math.min(total, minerals.length);
    
    for(let i = 0; i < maxMinerals; i += 5) {
        const group = minerals.slice(i, i+5);
        
        let difficulty = 0;
        for(const x of group) {
            if(x === 'diamond') {
                difficulty += 25;
            } else if( x === 'iron') {
                difficulty += 5;
            } else {
                difficulty += 1;
            }
        };
        
        groups.push({minerals: group, difficulty});
    };
    
    groups.sort((a,b) => b.difficulty - a.difficulty);

    const pickIdxs = [];
    for(let i = 0; i < picks[0]; i++) pickIdxs.push(0);
    for(let i = 0; i < picks[1]; i++) pickIdxs.push(1);
    for(let i = 0; i < picks[2]; i++) pickIdxs.push(2);
    
    for(let i = 0; i < groups.length && i < pickIdxs.length; i++) {
        const {minerals} = groups[i];
        const pickIdx = pickIdxs[i];
        
        for(const m of minerals) {
            answer += scoreTable[m][pickIdx]
        };
    };
    
    return answer;
}