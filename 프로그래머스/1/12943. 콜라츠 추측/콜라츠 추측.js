function solution(num) {
    var answer = -1;
    let cnt = 0;
    
    if(num === 1) return 0;
    
    for(let i = 1; i <= 500; i++){
        if(num%2===0) {
            num = num/2
        } else {
            num = num*3 + 1
        }
        cnt++;
        
        if(num === 1) return cnt;
    };
    
    return answer;
}