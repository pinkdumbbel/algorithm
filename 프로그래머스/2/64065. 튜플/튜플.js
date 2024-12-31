function solution(s) {
    return s
            .slice(2,-2)
            .split('},{')
            .map((s) => s.split(',').map(Number))
            .sort((a,b) => a.length - b.length)
            .reduce((a,b) => [...a, ...b.filter((el) => !a.includes(el))], []);
}