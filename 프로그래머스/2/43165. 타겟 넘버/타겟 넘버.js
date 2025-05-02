function solution(numbers, target) {
    let answer = 0;
    const n = numbers.length;
    
    const dfs = (L, sum) => {
        if(L >= n) {
            return sum === target ? 1 : 0
        } else {
            return dfs(L+1, sum+numbers[L]) + dfs(L+1, sum-numbers[L]); 
        };
    };
    
    return dfs(0, 0);
}