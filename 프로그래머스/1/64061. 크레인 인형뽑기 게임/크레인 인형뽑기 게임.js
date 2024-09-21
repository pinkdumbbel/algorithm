function solution(board, moves) {
    var answer = 0;
    const stack = [];
    
    for(let i = 0; i < moves.length; i++) {
       const move = moves[i] - 1;
       
        for(let j = 0; j < board.length; j++) {
            const item = board[j][move];
            
            if(item > 0) {               
                if(item === stack[stack.length-1]) {
                    answer+=2;
                    stack.pop();
                } else {
                    stack.push(item);
                }
                board[j][move] = 0;
                break;
            }
        };
    }
    
    return answer;
}