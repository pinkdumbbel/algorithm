function solution(code) {
    var answer = '';
    let mode = false;
    
    for(let i = 0; i < code.length; i++) {
        const s = code[i];
        
        if(s === "1") {
            mode = !mode
            continue;
        }
        
        if((i%2 === 0 && !mode) || (i%2===1 && mode)) {
            answer+=s;
        }
    };
    
    return answer.length ? answer : 'EMPTY';
}