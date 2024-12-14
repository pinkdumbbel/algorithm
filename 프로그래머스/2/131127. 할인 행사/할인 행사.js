function solution(want, number, discount) {
    let answer = 0;
    let p = 0;
    const max = 10;
    
    const hash = {};
    
    want.forEach((w, i) => {
        hash[w] = number[i];           
    });
    
    while(p <= discount.length-max) {
        const copied = {...hash};
        for(let i = p; i < max+p; i++) {
            const item = discount[i];
            if(copied[item] > 0) copied[item] = copied[item]-1;
        }
        
        if(want.every(w => copied[w] === 0)) answer++;
        p++;
    };
    
    return answer;
}