function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    const bridge = new Array(bridge_length).fill(0);
    let sum = 0;
    
    while(truck_weights.length) {
        answer++;
        sum -= bridge.shift();
        
        if(sum+truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            sum += truck;
            bridge.push(truck);
        } else {
            bridge.push(0);    
        };
    };
    
    while(bridge.length) {
        answer++;
        bridge.pop();
    };
    
    return answer;
}