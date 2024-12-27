function solution(cacheSize, cities) {
    // 캐시 크기가 0인 경우 특별 처리
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    // 대소문자 구분 없는 캐시 구현
    const cache = new Map();
    let totalTime = 0;
    
    for (const city of cities) {
        const cityLower = city.toLowerCase();
        
        // 캐시에 도시가 있는 경우 (캐시 히트)
        if (cache.has(cityLower)) {
            // 해당 도시를 가장 최근에 사용된 항목으로 갱신
            cache.delete(cityLower);
            cache.set(cityLower, true);
            totalTime += 1;
        } 
        // 캐시에 도시가 없는 경우 (캐시 미스)
        else {
            // 캐시가 꽉 찬 경우 가장 오래된 항목 제거
            if (cache.size >= cacheSize) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            
            // 새로운 도시 추가
            cache.set(cityLower, true);
            totalTime += 5;
        }
    }
    
    return totalTime;
}
