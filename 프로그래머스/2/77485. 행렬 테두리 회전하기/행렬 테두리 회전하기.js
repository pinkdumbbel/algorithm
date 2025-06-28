function solution(rows, columns, queries) {
    const answer = [];
    const mat = [];
    queries = queries.map((row) => row.map((col) => col-1));
    
    for(let i = 0; i < rows; i++) {
        const arr = [];
        for(let j = i*columns+1; j <= i*columns+columns; j++) {
            arr.push(j);
        }
        mat.push(arr);
    };
    
    for(const [y1, x1, y2, x2] of queries) {
        const border = [];
        
        for(let j = x1; j < x2; j++) {
            border.push(mat[y1][j]);
        };
        
        for(let i = y1; i < y2; i++) {
            border.push(mat[i][x2]);
        };
        
        for(let j = x2; j > x1; j--) {
            border.push(mat[y2][j]);
        };
        
        for(let i = y2; i > y1; i--) {
            border.push(mat[i][x1]);
        }
        
        const rotated = [border[border.length-1],...border.slice(0, -1)];
        
        let idx = 0;
        
        for(let j = x1; j < x2; j++) {
            mat[y1][j] = rotated[idx++];
        };
        
        for(let i = y1; i < y2; i++) {
            mat[i][x2] = rotated[idx++];
        };
        
        for(let j = x2; j > x1; j--) {
            mat[y2][j] = rotated[idx++];
        };
        
        for(let i = y2; i > y1; i--) {
            mat[i][x1] = rotated[idx++];
        }
        
        answer.push(Math.min(...rotated));
    };
    
    return answer;
}