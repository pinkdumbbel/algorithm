function solution(board, moves) {
    let answer = 0;
    const stack = [];

    //2, 2, 4, 4
    for (m of moves) {
        let idx = m - 1;
        for (let i = 0; i < board.length; i++) {
            if (board[i][idx] !== 0) {
                if (stack[stack.length - 1] === board[i][idx]) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(board[i][idx]);
                    board[i][idx] = 0;
                }
                break;
            }
        }
        console.log(stack);
    }
    return answer;
}

const board = [[0, 0, 0, 0, 0], [2, 0, 1, 0, 3], [2, 2, 5, 0, 1], [4, 2, 4, 4, 2], [4, 5, 1, 3, 1]];

const moves = [1, 1, 1, 1, 1];

console.log(solution(board, moves));