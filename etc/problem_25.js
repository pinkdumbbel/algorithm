function solution(n) {
    let answer = [];
    function fn(n) {
        if (n > 7) return;
        else {
            fn(n * 2);
            fn(n * 2 + 1);
            answer.push(n);
        }
    }
    fn(n);

    return answer;
}

console.log(solution(1));
