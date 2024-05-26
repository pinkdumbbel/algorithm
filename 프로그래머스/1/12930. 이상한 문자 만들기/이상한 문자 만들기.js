function solution(s) {
    
    return s.split(' ').map((s) => [...s].map((c, i) => i%2 ? c.toLowerCase() : c.toUpperCase()).join('')).join(' ');
}