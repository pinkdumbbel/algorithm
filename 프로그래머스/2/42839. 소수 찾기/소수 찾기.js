function solution(numbers) {
    const n = numbers.length;
    const chk = Array(n).fill(false);
    
    const set = new Set();
    
    const isPrime = (n) => {
        n = Number(n);
        if(n < 2) return false;    
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n%i===0) return false;
        }
        return true;
    };
    
    const dfs = (s = '') => {
        if(isPrime(s)) set.add(Number(s))
        
        for(let i = 0; i < n; i++) {
            if(!chk[i]) {
                chk[i] = true;
                dfs(s+numbers[i]);
                chk[i] = false;
            }
        }; 
    };
    
    dfs();
    
    return set.size;
}