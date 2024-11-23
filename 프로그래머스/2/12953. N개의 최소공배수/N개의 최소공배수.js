function solution(arr) {
    let answer = 0;
    const max = Math.max(...arr);
    let n = 2;
    
    while(true) {
      let isMinimumCommonMultiple = true;
      answer = max * n;
        
      arr.forEach((x) => {
        if(x === max) return;
        if(!isMinimumCommonMultiple) return;
          
        if(answer%x !== 0) isMinimumCommonMultiple = false;
      });
        
      if(isMinimumCommonMultiple) return answer;
      n++;
    };
    
    return answer;
}