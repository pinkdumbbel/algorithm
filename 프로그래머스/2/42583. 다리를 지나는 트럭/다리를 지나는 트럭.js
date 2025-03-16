function solution(bridge_length, weight, truck_weights) {
    let answer = sum = 0;
    const bridge = Array(bridge_length).fill(0);
    
    while(truck_weights.length || sum) {
        answer++;
        
        sum -= bridge.shift();
        
        if(truck_weights.length) {
            if(truck_weights[0] + sum <= weight) {
                const truck = truck_weights.shift();
                sum+=truck;
                bridge.push(truck);                
            } else {
                bridge.push(0)
            };
        } else {
            bridge.push(0)
        }
    };
    
    return answer;
}

