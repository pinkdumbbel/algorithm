function solution(s) {    
    return s.slice(2, -2)
            .split("},{")
            .map((s) => s.split(","))
            .sort((a, b) => a.length - b.length)
            .reduce((acc, cur) => ([...acc, ...cur.filter((el) => !acc.includes(el))]), [])
            .map(Number)
}