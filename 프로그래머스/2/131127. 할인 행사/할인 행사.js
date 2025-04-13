function solution(want, number, discount) {
    let answer = 0;
    const len = discount.length;
    
    for(let i = 0; i <= len-10; i++) {        
        const arr = discount.slice(i, i+10);
        const map = new Map();
        
        want.forEach((el,i) => {
            map.set(el, number[i]);
        });
        
        for(let j = 0; j < arr.length; j++) {
            const item = arr[j];
            
            if(map.has(item)) {
                map.set(item, map.get(item)-1);
                if(map.get(item) === 0) map.delete(item) 
            };
        }
        
        if(!map.size) answer++;
    }
    
    return answer;
}