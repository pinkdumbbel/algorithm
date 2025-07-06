function solution(board) {
    let answer = 0;
    const rows = board.length;
    const cols = board[0].length;
    
    const dp = Array(rows).fill().map(() => Array(cols).fill(0));
    
    for(let row = 0; row < rows; row++) {
        dp[row][0] = board[row][0];
        answer = Math.max(dp[row][0], answer)
    };
    
    for(let col = 0; col < cols; col++) {
        dp[0][col] = board[0][col]
        answer = Math.max(dp[0][col], answer)
    };
    
    for(let i = 1; i < rows; i++) {
        for(let j = 1; j < cols; j++) {
            if(board[i][j] === 1) {
              dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) +1;
              answer = Math.max(dp[i][j], answer);
            };
        }
    }
    
    return answer * answer;
}
