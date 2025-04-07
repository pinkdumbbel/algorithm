function solution(elements) {
    const set = new Set();
    const len = elements.length;
    elements = elements.concat(elements);
    
    for(let i = 0; i < len; i++) {
        for(let j = 1; j <= len; j++) {
            const sum = elements.slice(i, i+j).reduce((a,b) => a+b, 0);
            set.add(sum);
        }
    };
    
    return set.size;
}