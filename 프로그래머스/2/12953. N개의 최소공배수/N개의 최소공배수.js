function solution(arr) {
    let answer = 0;
    const max = Math.max(...arr);
    let n = 2;
    
    while(true) {
        let flag = true;
        answer = max*n;
        
        arr.forEach((el) => {
            if(!flag) return;
            if(answer%el !== 0) flag = false;
        });
        
        if(flag) return answer; 
        n++;
    };
    
    return answer;
}

/*
배열의 모든 값을 곱 누적하여 answer에 할당
2중 반복으로 하나씩 나눈 후 그 값으로 모든 요소가 나누어 졌을때 그 값중 가장 작은값을 넣는다.
*/