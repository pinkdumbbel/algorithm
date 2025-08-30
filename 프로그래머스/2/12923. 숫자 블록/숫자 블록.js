function solution(begin, end) {
    const result = new Array(end - begin + 1).fill(0);
    
    const maxBlock = Math.min(Math.floor(end / 2), 10000000);
    
    for (let n = 1; n <= maxBlock; n++) {
        let start = Math.max(n * 2, Math.ceil(begin / n) * n);
        
        for (let pos = start; pos <= end; pos += n) {
            if (pos >= begin) result[pos - begin] = n;
        }
    }
    
    return result;
}