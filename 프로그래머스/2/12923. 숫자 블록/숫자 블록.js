function solution(begin, end) {
    const answer = Array(end-begin+1).fill(0);
    const maxBlock = Math.min(10_000_000, Math.floor(end/2));
    
    for(let block = 1; block <= maxBlock; block++) {
        let start = Math.max(block*2, Math.ceil(begin/block)*block);
        
        for(start; start <= end; start+=block) {
            if(start >= begin) answer[start-begin] = block;
        };
    };
    
    return answer;
}