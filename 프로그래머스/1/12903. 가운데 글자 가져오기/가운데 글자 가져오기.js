function solution(s) {
    
    const n = s.length;
    return n%2 ? s[Math.floor(n/2)] : s.substring((n/2)-1, n/2+1);
}