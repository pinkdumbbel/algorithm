function solution(numbers, target) {
    var answer = 0;
    const n = numbers.length;
    
    function dfs(L, sum) {
        if(L >= n) {
          return sum === target ? 1 : 0;  
        } else {
            return dfs(L+1, sum+numbers[L]) + dfs(L+1, sum-numbers[L])
        }
    };
    
    return dfs(0, 0);
}
