function solution(land) {
    return Math.max(...land.reduce((a,b) => ([
        b[0] + Math.max(a[1], a[2], a[3]),
        b[1] + Math.max(a[0], a[2], a[3]),
        b[2] + Math.max(a[0], a[1], a[3]),
        b[3] + Math.max(a[0], a[1], a[2]),
    ]), [0,0,0,0]))
}