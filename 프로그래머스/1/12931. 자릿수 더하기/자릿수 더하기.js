function solution(n)
{
    var answer = 0;
    let q = n;
    
    while(q > 0) {
        answer += q%10
        q = Math.floor(q/10);
    };
    
    return answer;
}