function solution(n, k) {
    let answer = 0;
    let stack = [];
    const str = n.toString(k);
    
    for(const s of str) {
        if(s === '0') {
            if(isPrime(stack.join(''))) answer++;
            stack = [];
        } else {
            stack.push(s);
        }
    };
    
    if(isPrime(stack.join(''))) answer++;
    
    return answer;
}

const isPrime = (n) => {
    if(!n || n == 1 || n == 0) return false;
    
    n = Number(n);
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(!(n%i)) return false;
    };
    
    return true;
};