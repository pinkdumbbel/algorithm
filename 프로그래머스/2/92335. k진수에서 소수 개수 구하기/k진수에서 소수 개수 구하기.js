function solution(n, k) {
    var answer = 0;
    const arr = n.toString(k).split('0');

    arr.forEach((n) => {
        if(!n || n === '1') return;
        
        if(isPrime(n)) {
            answer++;
        }
    });
    
    return answer;
}

const isPrime = (s) => {
    const n = Number(s);
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i===0) return false;    
    };
    
    return true;
};

