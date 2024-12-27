function solution(clothes) {
    var answer = 0;
    const map = new Map();
    
    clothes.forEach(([a,b]) => {
        map.set(b, map.get(b) ? map.get(b)+1 : 1);
    });
    
    return [...map.values()].reduce((acc,cur) => acc*(cur+1),1) - 1;
}

