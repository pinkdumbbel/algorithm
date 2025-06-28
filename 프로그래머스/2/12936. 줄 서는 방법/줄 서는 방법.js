function solution(n, k) {
    const factorials = [1];
    for (let i = 1; i < n; i++) {
        factorials[i] = factorials[i - 1] * i;
    }
    
    const available = Array.from({ length: n }, (_, i) => i + 1);
    const result = [];
    let currentK = k - 1;
    
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(currentK / factorials[i]);
        result.push(available.splice(index, 1)[0]);
        currentK %= factorials[i];
    }
    
    return result;
}