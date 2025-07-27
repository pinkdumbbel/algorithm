function solution(plans) {
    const answer = [];
    plans = plans.sort((a,b) => getTime(a[1]) - getTime(b[1]))
                 .map(([name, start, play]) => ([name, getTime(start), Number(play)]));
    
    const stack = [];
    
    for(let i = 0; i < plans.length; i++) {
        const [name, startTime, playTime] = plans[i];
        const nextStartTime = i < plans.length-1 ? plans[i+1][1] : Infinity;
        
        let currentTime = startTime;
        let remainTime = playTime;
        
        while(remainTime > 0) {
            const diffTime = nextStartTime - currentTime;
            
            if(diffTime >= remainTime) {
                answer.push(name);
                currentTime += remainTime;
                remainTime = 0;
                
                while(stack.length && currentTime < nextStartTime) {
                    const task = stack.pop();
                    const leftTime = nextStartTime - currentTime;
                    
                    if(leftTime >= task.remainTime) {
                        answer.push(task.name);
                        currentTime += task.remainTime;
                    } else {
                        task.remainTime -= leftTime;
                        stack.push(task);
                        currentTime = nextStartTime;
                    };
                };
            } else {
                remainTime -= diffTime;
                stack.push({
                    name,
                    remainTime
                });
                remainTime = 0;
            };
        };
    };
    
    while(stack.length) {
        answer.push(stack.pop().name)  
    };
    
    return answer;
}

const getTime = (start, end) => {
    const [hour, minute] = start.split(':').map(Number);
    
    return hour*60+minute;
};