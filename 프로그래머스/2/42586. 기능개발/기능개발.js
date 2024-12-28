/*
1. 스택을 만든다.
2. progresses를 순회 하면서 100이 될때 까지 돈다.
3. while을 순회 하면서 day를 하나씩 증가 시킨다.
4. 100이 되면 stack에 push한다.
5. stack에 이미 값이 있는데 그 값이 삽입 될 day보다 크거나 같으면 그 값으로 처리한다.
6. stack을 만들었으면 while을 돌면서 shift를 한다.
7. 임시변수 tmp를 선언한다.
8. 순회를 하면서 stack에 있는 일자를 tmp에 할당한다.
9. 순회를 하면서 누적할 변수 sum을 만들고 하나씩 증가 시킨다.
10. 현재 일자가 tmp보다 큰 경우에만 answer에 push한다.
*/
function solution(progresses, speeds) {
    const answer = [];
    const stack = [];
    
    progresses.forEach((p, i) => {
        let per = p;
        let day = 0;
        
        while(per < 100) {
          const speed = speeds[i];  
          per += speed
          day++;
        }; 
        
        stack.push(day);
    });
    
    /*
    6. stack을 만들었으면 while을 돌면서 shift를 한다.
    7. 임시변수 tmp를 선언한다.
    8. 순회를 하면서 stack에 있는 일자를 tmp에 할당한다.
    9. 순회를 하면서 누적할 변수 sum을 만들고 하나씩 증가 시킨다.
    10. 현재 일자가 tmp보다 큰 경우에만 answer에 push한다.
    */
    let tmp = 0;
    let sum = 0;
    
    while(stack.length) {
        const current = stack.shift();
        
        
        if(tmp && tmp < current) {
            answer.push(sum);    
            sum = 0;
        };
        
        tmp = Math.max(current, tmp);
        sum++;
    };
    
    answer.push(sum);
    
    return answer;
}

//진도가 100% 여야 서비스에 반영 가능
//개발속도가 달라 후에 개발된 서비스가 먼저 개발 될 수 있음
//먼저 개발 되더라도 기다렸다가 앞에 있는 기능이 배포될 때 함께 배포됨
//배포가 될 때마다 answer에 기능을 push 한다.

