function solution(n) {
    const div = 1234567;
    const memo = [0, 1]
    
    for(let i = 2; i <= n; i++) {
        memo[i] = (memo[i-1]+memo[i-2])%div    
    };
    
    return memo[n];
}