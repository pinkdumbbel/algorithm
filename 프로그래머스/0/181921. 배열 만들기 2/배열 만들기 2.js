function solution(l, r) {
    var answer = [];
    
    for(let i =l; i<=r; i++) {
        if([...String(i)].some(s => Number(s) !== 5 && Number(s) !==0)) continue;
        answer.push(i);
    };
    
    answer.sort((a,b) => a-b);
    
    return answer.length ? answer : [-1];
}