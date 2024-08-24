function solution(keymap, targets) {
    var answer = [];
    const hash = {};
    
    keymap.forEach((key) => {
        for(let i = 0; i < key.length; i++) {
          const k = key[i];
          
          if(hash[k]) {
            hash[k] = Math.min(hash[k], i+1);  
          } else {
             hash[k] = i+1;
          };
        };
    });
    
    targets.forEach((target) => {
        let sum = 0;
        
        for(const t of target) {
            if(hash[t]) {
               sum += hash[t];
           } else {
               sum = -1;
               break;
           }
        };
        
        answer.push(sum);
    });
   
    return answer;
}