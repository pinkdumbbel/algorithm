function solution(myString) {
    var answer = '';
    const lCharCode = 'l'.charCodeAt(0);
    
    for(const x of myString) {
        answer += lCharCode > x.charCodeAt(0) ? 'l' : x;
    };
    
    return answer;
}