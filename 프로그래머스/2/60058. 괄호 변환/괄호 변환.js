function solution(p) {
    if(p === '') return p;
    
    if(isCorrect(p)) return p;
    
    let u = v = '';
    let cnt = 0;
    
    for(let i = 0; i < p.length; i++) {
        const s = p[i];
        if(s === '(') cnt++;
        else cnt--;
         
        u+=s;
        
        if(cnt === 0) {
            v = p.slice(i+1);
            break;
        };
    };
    
    if(isCorrect(u)) {
        return u + solution(v);
    } else {
        let result = '';
        
        result += '(';
        
        result += solution(v);
        
        result += ')';
        
        for(let i = 0; i < u.length; i++) {
            if(i === 0 || i === u.length-1) continue;
            result += u[i] === ')' ? '(' : ')';
        }
        
        return result;
    };
}

const isCorrect = (str) => {
    let cnt = 0;
    for(const s of str) {
      if(s === '(') cnt++;
      else cnt--;
        
      if(cnt < 0) return false;
    };
    
    return cnt === 0;
    
}