function solution(str1, str2) {
    let answer = 0;
    const sh = new Map();
    const th = new Map();
    let lt = rt = 0;

    for (let i = 0; i < str2.length - 1; i++) {
        if (sh.has(str1[i])) sh.set(str1[i], sh.get(str1[i]) + 1);
        else sh.set(str1[i], 1);
        rt = i + 1;
    }

    for (s of str2) {
        if (th.has(s)) th.set(s, th.get(s) + 1);
        else th.set(s, 1);
    }

    for (; rt < str1.length; rt++) {
        if (sh.has(str1[rt])) sh.set(str1[rt], sh.get(str1[rt]) + 1);
        else sh.set(str1[rt], 1);
        if (compareMaps(sh, th)) answer++;
        sh.set(str1[lt], sh.get(str1[lt]) - 1);
        sh.get(str1[lt]) === 0 && sh.delete(str1[lt]);
        lt++;
    }
    return answer;
}

function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;

    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }

    return true;
}

const input1 = 'bacaAacba';
const input2 = 'abc';

console.log(solution(input1, input2));
