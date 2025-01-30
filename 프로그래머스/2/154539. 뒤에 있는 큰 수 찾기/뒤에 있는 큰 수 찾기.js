function solution(numbers) {
    const n = numbers.length;
    const result = new Array(n).fill(-1);
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        const n = numbers[i];
        
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < n) {
            result[stack.pop()] = n;
        }
        stack.push(i);
    }
    
    return result;
}