function solution(s) {
    return (s.length === 6 || s.length === 4) && s.replace(/\D/g, '') === s;
}