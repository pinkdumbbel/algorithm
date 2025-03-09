function solution(queue1, queue2) {
    let answer = 0;
    
    const totalLength = queue1.length + queue2.length;
    const queue = [...queue1, ...queue2];
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    const target = (sum1 + sum2) / 2;
    
    let start = 0;
    let end = queue1.length;
    
    while (answer <= totalLength * 3) {
        if (sum1 === target) return answer;
        
        if (sum1 > target) {
            sum1 -= queue[start];
            start = (start + 1) % totalLength;
        } else {
            sum1 += queue[end];
            end = (end + 1) % totalLength;
        }
        
        answer++;
    }
    
    return -1;
}