function solution(need, plan) {
    let answer = 'YES';
    const queue = [];

    for (s of plan) {
        if (need.includes(s)) queue.push(s);
    }

    if (!queue.join('').includes(need)) answer = 'NO';

    return answer;
}

const need = 'CBA';
const plan = 'CBDAGE';
console.log(solution(need, plan));

