function solution(board) {
    const n = 3;
    
    board = board.map((b) => b.split(''));
    let round = 0, oCnt = 0, xCnt = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const v = board[i][j];
            
            if(v === 'O' || v === 'X') {
                v === 'O' ? oCnt++ : xCnt++;
                round++;
            } 
        }
    };

    if (oCnt < xCnt || oCnt > xCnt + 1) return 0
    
    const isWin = (player) => {
        //가로
        for(let i = 0; i < n; i++) {
            if(
                board[i][0] === player &&
                board[i][1] === player &&
                board[i][2] === player 
            ) return true;
        };
            
        //세로
        for(let j = 0; j < n; j++) {
            if(
                board[0][j] === player &&
                board[1][j] === player &&
                board[2][j] === player 
            ) return true;
        };
            
        //왼쪽 대각선
        if(board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
            
        //오른쪽 대각선
        if(board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
        
        return false
    };
    
    const oWin = isWin('O');
    const xWin = isWin('X');
            
    if(oWin && xWin) return 0;
    
    if(oWin) {
        return oCnt===xCnt+1 ? 1 : 0; 
    }
    
    if(xWin) {
        return oCnt === xCnt ? 1 : 0;    
    };
    
    return 1;
}