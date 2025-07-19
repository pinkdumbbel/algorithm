function solution(diffs, times, limit) {
    function calculateTime(level) {
        let totalTime = 0;
        let timePrev = 0;
        
        for (let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const timeCur = times[i];
            
            if (diff <= level) {
                totalTime += timeCur;
            } else {
                const mistakes = diff - level;
                totalTime += mistakes * (timeCur + timePrev) + timeCur;
            }
            
            timePrev = timeCur;
        
            if (totalTime > limit) return totalTime;
        }
        
        return totalTime;
    }
    
    let left = 1;
    let right = [...diffs].sort((a,b) => b-a)[0];
    let result = right;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (calculateTime(mid) <= limit) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}
