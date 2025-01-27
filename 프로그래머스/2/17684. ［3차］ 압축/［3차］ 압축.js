function solution(msg) {
    const answer = [];
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const dic = new Map();
    
    str
    .split('')
    .forEach((c, i) => {
        dic.set(c, i+1);
    });
    
    let index = str.length+1;
    let w = '';
    
    msg
    .split('')
    .forEach((c) => {
        const wc = w + c;
        
        if(dic.has(wc)) {
            w = wc;
        } else {
            answer.push(dic.get(w));
            dic.set(wc, index++);
            w = c;
        };
    });
 
    if (w) {
        answer.push(dic.get(w));
    }
    
    return answer;
}

