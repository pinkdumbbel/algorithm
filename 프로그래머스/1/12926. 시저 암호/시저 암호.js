function solution(s, n) {
    const space = 32;
    const z = 122;
    const Z = 90;
    
    return [...s].map((c) => {
        let code = c.charCodeAt();
    
        if(code === space) {
            return ' '    
        };
        
        if(code <= Z) {
            code += n;
            if(code > Z) code -=26;
            return String.fromCharCode(code);
        }
        
        if(code <= z) {
            code += n;
            if(code > z) code -=26;
            return String.fromCharCode(code);
        };
        
        return String.fromCharCode(code);
    }).join('');
}