function solution(str1, str2) {
    let answer = 'YES';
    const sh1 = new Map();
    const sh2 = new Map();

    for (s1 of str1) {
        if (sh1.has(s1)) sh1.set(s1, sh1.get(s1) + 1);
        else sh1.set(s1, 1);
    }

    for (s2 of str2) {
        if (sh2.has(s2)) sh2.set(s2, sh2.get(s2) + 1);
        else sh2.set(s2, 1);
    }

    sh1.forEach((v, k) => {
        if (sh2.get(k) !== v) {
            answer = 'NO';
        }
    });

    return answer;
}

const input1 = 'Caaab';
const input2 = 'abaCC';

console.log(solution(input1, input2));
