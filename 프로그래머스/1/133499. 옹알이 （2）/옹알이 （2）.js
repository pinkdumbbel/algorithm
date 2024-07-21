
function solution(babbling) {
    var answer = 0;
    const texts = ['aya','ye', 'woo', 'ma'];
    const ableStrings = [...texts.join('')];
    
    babbling.forEach((s) => {
        const babblings = [...s];
        let stringStack = '';
        let tmp = '';
        
        babblings.forEach((ss) => {
            stringStack += ss;
            
            if(!ableStrings.includes(ss)) return;
            
            if(texts.includes(stringStack) && tmp !== stringStack) {
                tmp = stringStack;
                stringStack = '';
            };
        });
        
        if(!stringStack) answer++;
    });
    
    return answer;
}