function solution(m, n, board) {
    let answer = 0;
    board = board.map((s) => s.split(''));

    while(true) {
        const toRemoved = new Set();
        
        for(let i = 0; i < m-1; i++) {
            for(let j = 0; j < n-1; j++){
                const v = board[i][j];
                if(
                    v &&
                    v === board[i][j+1] &&
                    v === board[i+1][j] &&
                    v === board[i+1][j+1]
                ) {
                    toRemoved.add(`${i}:${j}`);
                    toRemoved.add(`${i}:${j+1}`);
                    toRemoved.add(`${i+1}:${j}`);
                    toRemoved.add(`${i+1}:${j+1}`);
                }
            }
        };
        
        if(toRemoved.size === 0) break;
        
        answer += toRemoved.size;
        toRemoved.forEach((v) => {
            const [i, j] = v.split(':').map(Number);
            board[i][j] = null;
        });
        
        for (let j = 0; j < n; j++) {
            let index = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j]) {
                    board[index][j] = board[i][j];
                    if (index !== i) board[i][j] = null;
                    index--;
                }
            }
        }
    };
    
    return answer;
}

