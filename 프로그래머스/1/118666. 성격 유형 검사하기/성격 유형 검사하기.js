function solution(survey, choices) {
    var answer = '';
    const map = new Map();
    const set = new Set();
    
    const mid = 3;
    const scores = [3,2,1,0,1,2,3]
    
    const arr = [['R','T'],['C','F'],['J', 'M'],['A', 'N']];
    
    for(let i = 0; i < survey.length; i++) {
        const [a, b] = survey[i];
        const choice = choices[i]-1;
        const score = scores[choice];
        
        const type = choice < mid ? a : b;
        
        map.set(type, (map.get(type) ?? 0) + score);     
    };
    
    for(const [a,b] of arr){
        const scoreA = map.get(a) ?? 0;
        const scoreB = map.get(b) ?? 0;
        
        if(scoreA === scoreB) {
           answer+=a
        } else {
           answer+=scoreA>scoreB ? a : b
        };
    }
    
    return answer;
}