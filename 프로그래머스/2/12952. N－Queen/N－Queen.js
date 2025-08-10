function solution(n) {
    let count = 0;
    const queens = new Array(n).fill(-1); // queens[i] = j는 i행 j열에 퀸이 있다는 의미
    
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            // 같은 열에 퀸이 있는지 확인
            if (queens[i] === col) return false;
            
            // 대각선에 퀸이 있는지 확인
            if (Math.abs(queens[i] - col) === Math.abs(i - row)) return false;
        }
        return true;
    }
    
    function backtrack(row) {
        // 모든 행에 퀸을 성공적으로 배치한 경우
        if (row === n) {
            count++;
            return;
        }
        
        // 현재 행의 각 열에 퀸을 배치해보기
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                queens[row] = col;
                backtrack(row + 1);
                queens[row] = -1; // 백트래킹
            }
        }
    }
    
    backtrack(0);
    return count;
}
