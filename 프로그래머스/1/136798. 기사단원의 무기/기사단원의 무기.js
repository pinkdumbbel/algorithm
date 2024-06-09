function solution(number, limit, power) {
    var answer = 0;
    
     for(let i = 1; i <= number; i++) {
        const chk = {};
        let sum = 0;
         
         if(i === 1) {
             answer += 1;
             continue;
         };
         
        for(let j = 1; j<=Math.sqrt(i); j++) {
           if(chk[j]) continue;
           if(i%j === 0) {
               const q = i/j;
               chk[q] = true;
               sum += (q===j ? 1 : 2);
           };
        }
        
         answer += sum > limit ? power : sum;  
    };
    
    return answer;
}

