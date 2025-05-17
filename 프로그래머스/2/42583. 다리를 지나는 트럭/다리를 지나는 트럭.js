function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    const bridge = [];
    const timer = [];
    let total = 0;
    
    while(truck_weights.length) {
        if(bridge.length < bridge_length && total+truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            total += truck;
            bridge.push(truck);
            timer.push(0);
        };
        
        for(let i = 0; i < timer.length; i++) {
            timer[i]++;    
        };
        
        if(timer[0] === bridge_length) {
            const truck = bridge.shift();
            const time = timer.shift();
            total-=truck
        };
        
        answer++;
    };
    
    while(timer.length) {
        if(timer[0] === bridge_length) timer.shift();
        
        for(let i = 0; i < timer.length; i++) {
            timer[i]++;    
        };
        
        answer++;
    };
    
    return answer;
}
