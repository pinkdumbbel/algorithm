function solution(dartResult) {
    var answer = 0;
    let sum = 0;
    const dartResults = [...dartResult];
    let scoreStack = [];
    let stringStack = '';
    
    const score = {
      S: 1,
      D: 2,
      T: 3,
    };
    
    dartResults.forEach((s) => {
        if(s === '*') {
            for(let i = 1; i <= 2; i++) {
                if(scoreStack[scoreStack.length -i]) {
                    scoreStack[scoreStack.length -i] = scoreStack[scoreStack.length -i] * 2;
                }
            };
            return;
        } else if(s === '#') {
            scoreStack[scoreStack.length -1] = scoreStack[scoreStack.length -1] * -1
            return;
        }
        
        if(score[s]) {
            const n = Number(stringStack);
            sum = n ** score[s];
            stringStack = '';
            scoreStack.push(sum);
            return;
        };
        
        stringStack += s;
    });
    
    return scoreStack.reduce((a,b) => a+b, 0);
}