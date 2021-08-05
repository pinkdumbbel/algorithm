function solution(cache, work) {
    let answer = Array.from({ length: cache }, () => 0);

    work.forEach(x => {
        let pos = -1;

        for (let i = 0; i < answer.length; i++) {
            if (x === answer[i]) pos = i;
        }

        if (pos === -1) {
            for (let i = answer.length - 1; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        } else {
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = x;

    });

    return answer;
}

//0 0 0 0 0
//3 2 1 0 0 

const cache = 5;
const work = [1, 2, 3, 2, 6, 2, 3, 5, 7];

//7 5 3 2 6 
console.log(solution(cache, work));

