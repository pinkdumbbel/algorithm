function solution(w, h) {
    
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    return w * h - (w + h - gcd(w, h));
}