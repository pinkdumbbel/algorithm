function solution(r1, r2) {
    let answer = 0;
    
    for (let x = -r2; x <= r2; x++) {
        // 큰 원에서 가능한 최대 y값
        const maxY = Math.floor(Math.sqrt(r2 * r2 - x * x));
        
        // 작은 원에서 가능한 최소 y값
        let minY = 0;
        if (Math.abs(x) < r1) {
            minY = Math.ceil(Math.sqrt(r1 * r1 - x * x));
        }
        
        // 양수와 음수 y 모두 계산하되, y=0일 때 중복 제거
        answer += (maxY - minY + 1) * 2 - (minY === 0 ? 1 : 0);
    }
    
    return answer;
}