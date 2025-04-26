function solution(progresses, speeds) {
    const answer = [];
    const tmp = [];
    
    progresses.forEach((p, i) => {
        const speed = speeds[i];
        const day = Math.ceil((100-p)/speed);
        
        tmp.push(day);
    });
    
    let max = tmp[0];
    let cnt = 1;
    
    for(let i = 1; i < tmp.length; i++) {
        const day = tmp[i];
        if(max >= day) {
            cnt++;
        } else {
            answer.push(cnt);
            cnt=1
            max = day;
        }
    };
    
    answer.push(cnt);
    
    return answer;
}