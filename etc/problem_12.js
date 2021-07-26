function solution(n, k) {
    let answer = 0;
    const queue = [];

    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }

    while (queue.length) {
        for (let i = 1; i < k; i++) queue.push(queue.shift());
        queue.shift();
        if (queue.length === 1) answer = queue.shift();
    }
    return answer;
}

const n = 8;
const k = 3;
console.log(solution(n, k));

