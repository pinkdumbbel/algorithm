function solution(array, height) {
    var answer = 0;
    
    for(const x of array) {
        if(x > height) answer++;
    };
    
    return answer;
}