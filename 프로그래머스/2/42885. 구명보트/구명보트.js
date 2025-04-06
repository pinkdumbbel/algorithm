function solution(people, limit) {
    let answer = 0;
    let rt = people.length-1;
    people.sort((a,b) => b-a);
    
    for(let lt = 0; lt <= rt; lt++) {
        if(people[lt]+people[rt] <= limit) {
            rt--;
        };       
        answer++;
    };
    
    return answer;
}