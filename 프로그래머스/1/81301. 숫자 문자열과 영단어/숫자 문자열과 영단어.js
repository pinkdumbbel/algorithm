function solution(s) {
    const dic = {
        "zero":"0",
        "one":"1",
        "two":"2",
        "three":"3",
        "four":"4",
        "five":"5",
        "six":"6",
        "seven":"7",
        "eight":"8",
        "nine":"9"
    };
    
    let stack =[];
    var answer = '';
    
    for(const c of s) {
        stack.push(c);    
        const ss = stack.join('');
        
        if(!isNaN(c)) {
            answer += c;
            stack = [];
        };
        
        if(dic[ss]) {
            answer += dic[ss];
            stack = [];
        };
    };
    
    return Number(answer);
}