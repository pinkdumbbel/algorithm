function solution(n) {
    var answer = 0;
    const div = 1234567;
    const memo = [0,1];
    
    for(let i = 2; i <= n; i++) {
        memo[i] = (memo[i-1]%div+memo[i-2]%div)%div;
    };
    
    return memo[n];
}