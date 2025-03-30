function solution(n){
    let answer = 0;
    
    while(n>0) {
        if(n%2) answer++;
        
        n = parseInt(n/2);
    };
    
    return answer;
}

/*
n === 7;
점1 -> 1;
순2 -> 2;
점1 -> 3;
순2 -> 6;
점1 -> 7;


*/