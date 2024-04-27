function solution(s){
    var answer = true;
    const hash = {};
    
    for (const x of s) {
        const lowerX = x.toLowerCase()
        if(lowerX !== 'p' && lowerX !== 'y') continue;
        hash[lowerX] = hash[lowerX] ?  hash[lowerX] + 1 : 1;
    };
    
    return hash['p'] === hash['y'];
}