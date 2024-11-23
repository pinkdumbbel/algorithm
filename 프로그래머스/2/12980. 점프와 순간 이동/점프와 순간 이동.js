function solution(n) {
    let answer = 1;    

    while(n !== 1) {
        let tmp = n;
        n = parseInt(tmp/2);
        
        if(tmp%2 === 1) answer++;
    };
    
    return answer;
}


