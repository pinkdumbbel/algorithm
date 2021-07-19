function solution(str) {
    let answer = 0;
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') stack.push(str[i]);
        else {
            stack.pop();
            if (str[i - 1] === '(') answer += stack.length;
            else answer++;
        }
    }

    return answer;
}

const str = '()(((()())(())()))(())';
console.log(solution(str));