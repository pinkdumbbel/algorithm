function solution(expression) {
    const numbers = [];
    const operators = [];
    let currentNumber = '';
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '+' || char === '-' || char === '*') {
            numbers.push(parseInt(currentNumber));
            operators.push(char);
            currentNumber = '';
        } else {
            currentNumber += char;
        }
    }
    numbers.push(parseInt(currentNumber));
    
    const uniqueOperators = [...new Set(operators)];
    
    function getPermutations(arr) {
        if (arr.length <= 1) return [arr];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            const perms = getPermutations(remaining);
            for (const perm of perms) {
                result.push([current, ...perm]);
            }
        }
        return result;
    }
    
    function calculate(nums, ops, priority) {
        let tempNums = [...nums];
        let tempOps = [...ops];
        
        for (const op of priority) {
            let i = 0;
            while (i < tempOps.length) {
                if (tempOps[i] === op) {
                    let result;
                    if (op === '+') {
                        result = tempNums[i] + tempNums[i + 1];
                    } else if (op === '-') {
                        result = tempNums[i] - tempNums[i + 1];
                    } else if (op === '*') {
                        result = tempNums[i] * tempNums[i + 1];
                    }
                    
                    tempNums.splice(i, 2, result);
                    tempOps.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
        
        return tempNums[0];
    }
    
    const permutations = getPermutations(uniqueOperators);
    let maxResult = 0;
    
    for (const priority of permutations) {
        const result = calculate(numbers, operators, priority);
        maxResult = Math.max(maxResult, Math.abs(result));
    }
    
    return maxResult;
}