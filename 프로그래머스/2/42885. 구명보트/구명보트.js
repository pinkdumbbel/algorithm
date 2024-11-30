function solution(people, limit) {    
    people.sort((a,b) => a-b);
    
    let answer = people.length;
    
    let lt = 0;
    let rt = people.length-1;
    
    while(lt < rt){
        if(people[lt] + people[rt] <= limit) {
            answer--;
            lt++;
            rt--;
        } else {
            rt--;
        }
    };
    
    return answer;
}