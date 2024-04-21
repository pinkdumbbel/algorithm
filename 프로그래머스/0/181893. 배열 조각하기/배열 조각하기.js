function solution(arr, query) {
    let answer = arr;
    
    query.forEach((q, i) => {
        if(i%2===0){
            answer.splice(q+1);
        } else {
            answer.splice(0, q)
        }
    });
    
    return answer;
}