function solution(s) {
    let cnt = 0;
    let removed = 0;
    
    while(s !== '1') {
        const len = s.toString(2).replace(/0/g,'').length;
        const zeros = s.length - len;
        s = len.toString(2);
        
        cnt++;
        removed += zeros;
    };
    
    return [cnt, removed];
}