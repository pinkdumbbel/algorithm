function solution(str) {
    let answer = '';
    const stack = [];
    for (s of str) {
        stack.push(s);
        if (s === ')') stack.splice(stack.lastIndexOf('('));

    }
    answer = stack.join('');
    return answer;
}

const input = 'EFEF(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(input));