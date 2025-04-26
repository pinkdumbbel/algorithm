function solution(cacheSize, cities) {
    let answer = 0;
    cities = cities.map((city) => city.toLowerCase());
    let map = new Map();
    
    cities.forEach((city) => {        
        if(map.get(city)) {
            map.delete(city);
            answer += 1;
        } else {
            answer += 5;
        };
        
        map.set(city, true);
        
        if(map.size > cacheSize) {
                const iter = map[Symbol.iterator]();
                iter.next();
                map = new Map([...iter]);
        };
    });
    
    return answer;
}