function solution(s) {
    return `${Math.min(...s.split(' ').map(Number))} ${Math.max(...s.split(' ').map(Number))}`
}