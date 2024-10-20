function solution(s) {
    let cnt = 0;
    let sum = 0;
    
    while(s.length > 1) {        
        const len = (s.match(/0/g) || []).length;
        s = s.replace(/0/g,'').length.toString(2);
        sum += len;
        cnt++;
    };
    
    return [cnt, sum]
}
