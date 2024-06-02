function solution(numbers) {
    var answer = [];
    const set = new Set();
    const n = numbers.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            set.add(numbers[i] + numbers[j]);
        };    
    };
    
    return [...set].sort((a,b) => a-b);
}