//캐시 크기에 따른 실행시간 측정

/*
- hash로 풀자(map을 사용하는게 편할듯)
- cities를 순회 하면서 map에 저장한다.
- map에 이미 데이터가 있으면 answer를 1 증가시키고 아니면 5를 증가시킨다.
- map의 사이즈가 cacheSize보다 크면 value가 false인 것 중 가장 첫번째 키를 delete한다.
*/
function solution(cacheSize, cities) {
    var answer = 0;
    const map = new Map();
    const caches = [];
    
    cities.forEach((city) => {
        const c = city.toLowerCase();
        const idx = caches.indexOf(c);
        
        if(idx >= 0) {
            answer+=1;
            caches.splice(idx,1);
        } else {
            answer+=5;
        };
        
        caches.unshift(c);
        
        if(caches.length > cacheSize) {
            caches.pop();
        };
    });
    
    return answer;
}

