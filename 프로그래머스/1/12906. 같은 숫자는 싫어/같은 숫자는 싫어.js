function solution(arr){
    const answer = [];
    
    for(const x of arr) { 
        if(answer[answer.length-1] !== x){
            answer.push(x);
        } 
        
    };
    
    return answer;
}