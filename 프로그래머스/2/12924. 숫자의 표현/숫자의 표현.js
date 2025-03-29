function solution(n) {
    let answer = 0, sum = 0, lt = 1;
    
    for(let rt = 1; rt <= n; rt++) {
        sum += rt;
        
        while(sum > n) {
            sum -= lt++;
        };
        
        if(sum == n) answer++;
    };
    
    return answer;
}
