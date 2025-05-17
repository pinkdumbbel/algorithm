function solution(queue1, queue2) {
    let answer = 0;
    const n = queue1.length;
    
    let sum1 = queue1.reduce((a,b) => a+b,0);
    let sum2 = queue2.reduce((a,b) => a+b,0);
    
    let p1 = 0;
    let p2 = 0;
    let cnt = 0;
    
    while(cnt < n*3) {
        if(sum1 > sum2) {
            const item = queue1[p1++];
            sum1 -= item
            sum2 += item
            queue2.push(item);
        } else if(sum1 < sum2) {
            const item = queue2[p2++];
            sum2 -= item
            sum1 += item
            queue1.push(item);
        } else {
            return answer;
        }
        
        answer++;
        cnt++;
    };
    
    return sum1 !== sum2 ? -1 : answer;
}

