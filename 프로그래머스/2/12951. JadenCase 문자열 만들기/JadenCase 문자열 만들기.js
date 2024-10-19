function solution(s) {
    let answer = '';
    let isUpperCase = false;
    
    for(const x of s.toLowerCase()) {
        if(x === ' ') {
            answer += x;
            isUpperCase = false;
        } else {
            answer+=(isUpperCase ? x : x.toUpperCase());
            isUpperCase = true;
        };
    };
    
    return answer;
}