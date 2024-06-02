function solution(s) {
    var answer = [];
    const hash = {};
    
    [...s].forEach((c, i) => {
        if(hash[c] !== undefined) {
            answer.push(i-hash[c]);
            hash[c] = i;
        } else {
            hash[c] = i;
            answer.push(-1);
        } 
    });
    
    return answer;
}