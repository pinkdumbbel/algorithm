function solution(numbers) {
    const answer = [];
    
    // n이 짝수인 경우에 +1 해준 값
    // n이 홀수인 경우에 마지막 01을 바꿔준 값
    numbers.forEach((n) => {
        if(n%2) {
            let bin = '0'+n.toString(2);
            const idx = bin.lastIndexOf('01');
            const arr = bin.split('');
            arr[idx] = '1';
            arr[idx+1] = '0';
            const min = arr.join('');
            answer.push(parseInt(min,2));
        } else {
            answer.push(n+1);    
        }
    });
    
    return answer;
}
