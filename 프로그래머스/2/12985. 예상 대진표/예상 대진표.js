function solution(n,a,b){
    let answer = 0;
    
    while(a>=1 || b>=1) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        
        answer++;
        
        if(a===b) return answer;
    };
    
    return answer;
}
