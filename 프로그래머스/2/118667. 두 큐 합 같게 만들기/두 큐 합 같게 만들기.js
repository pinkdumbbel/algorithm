function solution(queue1, queue2) {
    let answer = 0;
    
    let sum1 = queue1.reduce((acc, val) => acc + BigInt(val), 0n);
    let sum2 = queue2.reduce((acc, val) => acc + BigInt(val), 0n);
    const totalSum = sum1 + sum2;
    
    if (totalSum % 2n !== 0n) return -1;
    
    const target = totalSum / 2n;
    
    const combined = [...queue1, ...queue2];
    const n = queue1.length;
    
    let left = 0;
    let right = n - 1;
    
    const maxOperations = n * 4;
    
    while (answer <= maxOperations) {
        if (sum1 === target) {
            return answer;
        }
        
        if (sum1 > target) {
            const value = BigInt(combined[left]);
            sum1 -= value;
            sum2 += value;
            left = (left + 1) % (2 * n);
        } else {
            right = (right + 1) % (2 * n);
            const value = BigInt(combined[right]);
            sum1 += value;
            sum2 -= value;
        }
        answer++;
    }
    
    return -1; 
}