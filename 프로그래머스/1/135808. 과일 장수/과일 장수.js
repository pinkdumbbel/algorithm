function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a);   
    const tmp = [];
    let box = [];
    
    for(const s of score){
        box.push(s);
        
        if(box.length === m) {
            tmp.push(box);
            box = [];
        }
    };
    
    let min = Number.MAX_SAFE_INTEGER;
    
    tmp.forEach((box) => {
       if(box.length !== m) return;
        min = Math.min(...box, min);
        answer += (min*m);
        min = Number.MAX_SAFE_INTEGER;
    });
    
    return answer;
}