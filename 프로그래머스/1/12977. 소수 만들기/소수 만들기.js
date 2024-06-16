function solution(nums) {
    var answer = 0;
    const len = nums.length;
    
    for(let i =0; i < len; i++) {
        for(let j = i+1; j < len; j++) {
            for(let k = j+1; k < len; k++) {
               const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            };
        }
    }
    return answer;
}

const isPrime = (n) => {
 const set = new Set();
 
 for(let i = 1; i <= Math.sqrt(n); i++) {
     if(n%i === 0) {
        const q = n/i;
         set.add(i);   
         set.add(q);
     }
 };
    
 return set.size === 2;
}