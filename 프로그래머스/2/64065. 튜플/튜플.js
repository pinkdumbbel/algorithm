function solution(s) {
    return s
            .slice(1,-1)
            .split('},{')
            .map((s) => s.replace(/[{}]/g, '').split(',').map(Number))
            .sort((a,b) => a.length - b.length)
            .reduce((a,b) => [...a, ...b.filter((el) => !a.includes(el))], []);
}