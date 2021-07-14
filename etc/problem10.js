function solution(str) {
    let answer = 0, pop1 = 0, pop2 = 0;
    const stack = [];

    for (let s of str) {
        if (isNaN(s)) {
            pop1 = stack.pop();
            pop2 = stack.pop();
            if (s === '+') answer = pop2 + pop1;
            else if (s === '*') answer = pop2 * pop1;
            else if (s === '-') answer = pop2 - pop1;
            else answer = pop2 / pop1;
            stack.push(answer);
        }
        else stack.push(parseInt(s));
    }

    return answer;
}

const str = '35-';
console.log(solution(str));