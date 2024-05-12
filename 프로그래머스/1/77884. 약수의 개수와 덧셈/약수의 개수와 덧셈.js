function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <= right; i++) {
        answer = getMeasureCount(i)%2 ? answer - i : answer + i; 
    };
    
    return answer;
}

const getMeasureCount = (n) => {
    let cnt = 0;
    
    for(let i = 1; i<=n; i++){
        if(n%i === 0) cnt++;
    }
        
    return cnt;
};
        
