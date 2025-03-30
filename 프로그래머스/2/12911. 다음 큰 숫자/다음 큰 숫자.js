function solution(n) {
    var answer = 0;
    const tmp = n;
    
    while(true) {
        n++;
        if(n.toString(2).replace(/0/g,'').length === tmp.toString(2).replace(/0/g,'').length) {
            return n;
        };
    };
    
    return answer;
}

/*

*/
