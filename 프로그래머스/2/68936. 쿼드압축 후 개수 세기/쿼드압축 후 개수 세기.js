function solution(arr) {
    const answer = [0,0];
    
    const recur = (x, y, len) => {
        let same = true;
        const v = arr[y][x];
        
        for(let i = y; i < y+len; i++) {
            for(let j = x; j < x+len; j++) {
                if(v !== arr[i][j]) {
                    same = false;
                    break;  
                } 
            }
            if(!same) break;
        };
        
        if(same) {
          answer[v]++;  
        } else {
            const newLen = len/2;
            //왼쪽 위
            recur(x, y, newLen);
            //오른쪽 위
            recur(x+newLen, y, newLen);
            //왼쪽 아래
            recur(x, y+newLen, newLen);
            //오른쪽 아래
            recur(x+newLen, y+newLen, newLen);
        };
    };
    
    recur(0,0,arr.length);
    
    return answer;
}