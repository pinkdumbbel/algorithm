function solution(arr) {
    let answer = 0;
    const t_Line = [];

    for (x of arr) {
        t_Line.push([x[0], 'S']);
        t_Line.push([x[1], 'E']);
    }

    t_Line.sort((a, b) => {
        if (a[0] === b[0]) return b[1].charCodeAt() - a[1].charCodeAt();
        else return a[0] - b[0];
    });

    let cnt = 0;

    for (t of t_Line) {
        if (t[1] === 'S') cnt++;
        else cnt--;

        answer = Math.max(answer, cnt);
    }

    return answer;
}

const arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]; //2

console.log(solution(arr));