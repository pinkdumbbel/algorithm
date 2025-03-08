function solution(arr) {
    const answer = [0,0];
    
    function recur(x, y, len) {
        const value = arr[y][x];
        let same = true;
        
        for(let i = y; i < y+len; i++) {
            for(let j = x; j < x+len; j++) {
                if(value === arr[i][j]) {
                    
                } else {
                    same = false;
                    break;
                }
            }
            
            if(!same) break;
        };
        
        if(same) {
            answer[value]++;
        } else {
            const newLen = len/2;
            
            recur(x,y,newLen);
            recur(x+newLen, y, newLen);
            recur(x,y+newLen,newLen);
            recur(x+newLen,y+newLen,newLen);
        }
    }
    
    recur(0,0,arr.length);
    
    return answer;
}

