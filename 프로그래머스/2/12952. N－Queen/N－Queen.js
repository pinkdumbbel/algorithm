function solution(n) {
    let answer = 0;
    const check = Array.from({length:n}, () => Array.from({length: n}, () => false));
    
    const isValid = (row, col) => {
        for(let i = 0; i < row; i++) {
            if(check[i][col]) return false;   
        };
        
        for(let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if(check[i][j]) return false;    
        };
        
        for(let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if(check[i][j]) return false;    
        };
        
        return true;
    };
    
    const backtrack = (row = 0) => {
        if(row === n) {
            answer++;
            return;
        }
        
        for(let col = 0; col < n; col++) {
            if(isValid(row, col)) {
                check[row][col] = true;
                backtrack(row + 1);
                check[row][col] = false;
            };
        };
    };
    
    backtrack();
    
    return answer;
}