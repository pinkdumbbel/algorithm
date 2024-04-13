function solution(board, k) {
    var answer = 0;
    const n = board.length;
    
    for(let i = 0; i < n; i++) {
        if(i > k) return answer;
        
        for(let j = 0; j < board[i].length; j++){
            if(j > k) break;
            if(i+j > k) break;
            answer += board[i][j]
        }    
    };
    
    return answer;
}