function solution(a, b) {
    var answer = 0;
    
    switch(true) {
        case a%2===1 && b%2===1: 
            answer = (a ** 2) + (b ** 2);
            break;
        case a%2===1 || b%2===1:
            answer = 2 * (a+b);
            break;
        case a%2===0 && b%2===0:
            answer = Math.abs(a-b);
            break;
    };
    
    return answer;
}