function solution(n, words) {
    let answer = [0,0];
    const hash = {};
    
    words.forEach((word) => {
        hash[word] = false;
    });
    
    hash[words[0]] = true;
    
    const getFail = (index) => [(index%n)+1, parseInt(index/n)+1];
    
    for(let i = 1; i < words.length; i++) {
        const cur = words[i];
        const prev = words[i-1];
        
        if(hash[cur]) {
            return getFail(i)
        }
        
        if(prev[prev.length-1] !== cur[0]) {
            return getFail(i)
        };
        
        hash[cur] = true;
    };
    
    return answer;
}