function solution(s) {
    let answer = 0;
    const arr = s.split('');
    const hash = {
        ')':'(',
        ']':'[',
        '}':'{'
    };
    
    const isBraket = (arr) => {
        const stack = [];
        
        for(let i = 0; i < arr.length; i++) {
            const braket = arr[i];
            
            if(!hash[braket]) {
                stack.push(braket)
            } else {
                if(stack[stack.length-1] === hash[braket]) stack.pop();
                else return false;
            }
        };
        
        
        return !stack.length;
    };
    
    for(let i = 0; i < arr.length; i++) {
        if(isBraket(arr)) answer++;
        arr.push(arr.shift());
    };
    
    return answer;
}