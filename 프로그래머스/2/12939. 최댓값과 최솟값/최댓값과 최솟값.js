function solution(s) {
    return s
            .split(' ')
            .map(Number)
            .sort((a,b) => a-b)
            .filter((_, i, arr) => !i || i === arr.length-1)
            .join(' ');
}
