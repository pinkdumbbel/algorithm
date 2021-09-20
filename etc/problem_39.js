function solution(board) {
    let answer = 0;
    let n = arr.length;
    let dx = [0, 1, 0, -1];//상 우 하 좌
    let dy = [-1, 0, 1, 0];//상 우 하 좌

    function DFS(x, y) {
        if (x === n - 1 && y === n - 1) answer++;
        else {
            for (let i = 0; i < dx.length; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[ny][nx] === 0) {
                    board[ny][nx] = 1;
                    DFS(nx, ny);
                    board[ny][nx] = 0;
                }
            }
        }
    }

    board[0][0] = 1;
    DFS(0, 0);

    return answer;
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
