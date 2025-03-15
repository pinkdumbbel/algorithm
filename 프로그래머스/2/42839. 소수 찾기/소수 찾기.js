function solution(numbers) {
    const n = numbers.length;
    const set = new Set();
    const chk = Array(n).fill(false);
    
    const isPrime = (n) => {
        if(n < 2) return false;
        
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n%i === 0) return false;
        };        
        
        return true;
    };

    function dfs(permutations){
        if(permutations.length) {
            set.add(Number(permutations.join('')));    
        };
        
        for(let i = 0; i < n; i++) {
           if(!chk[i]) {
               chk[i] = true;
               dfs([...permutations, numbers[i]])
               chk[i] = false;
           }
        }  
    };
    
    dfs([]);
    
    return [...set].filter(isPrime).length;
}