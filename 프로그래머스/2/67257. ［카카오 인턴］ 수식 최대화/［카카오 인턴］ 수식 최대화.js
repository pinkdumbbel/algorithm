function solution(expression) {
    let answer = 0;
    const priorities = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['-', '+', '*'],
        ['-', '*', '+'],        
    ]
    
    const nums = [];
    const opers = [];
    let str = '';
    
    for(const char of expression) {
        if(priorities[0].includes(char)) {
            opers.push(char);
            nums.push(Number(str));
            str = '';
        } else {
            str += char;
        }; 
    };
    nums.push(Number(str));
    
    const calculate = (nums, ops, priority) => {
        const tmpNums = [...nums];
        const tmpOps = [...ops];
        
        for(const op of priority) {
            let result;
            let i = 0;
                
            while(i < tmpOps.length) {
                if(tmpOps[i] === op) {
                    if(op === '+') {
                       result = tmpNums[i] + tmpNums[i+1];                             
                    } else if(op === '-'){
                        result = tmpNums[i] - tmpNums[i+1];                             
                    } else {
                        result = tmpNums[i] * tmpNums[i+1];                             
                    };
                    
                    tmpNums.splice(i, 2, result);
                    tmpOps.splice(i, 1);
                } else {
                    i++;
                }
            };
        };
        
        return tmpNums[0];
    };
    
    for(const priority of priorities) {
        const result = calculate(nums, opers, priority);
        answer = Math.max(answer, Math.abs(result));
    };
    
    return answer;
}