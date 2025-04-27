function solution(str1, str2) {
    const sliceStr = (str) => {
        str = str.toLowerCase();
        const arr = [];
        
        for(let i = 0; i < str.length; i++) {
            const sliced = str.slice(i, i+2);
            if(sliced.length!==2 || sliced.match(/[^a-z]/g)) continue;
            arr.push(sliced);
        };
        
        return arr;
    };
    
    const arr1 = sliceStr(str1);
    const arr2 = sliceStr(str2);
    
    const intersection = (() => {
        let size = 0;
        
        const map1 = new Map();
        const map2 = new Map();
        
        arr1.forEach((str) => {
            map1.set(str, (map1.get(str)??0)+1);
        });
        arr2.forEach((str) => {
            map2.set(str, (map2.get(str)??0)+1);
        });
        
        map1.forEach((value, key) => {            
            size += Math.min(value, map2.get(key) ?? 0);    
        });
        return size;
    })();  
    
    const union = (() => {
        let size = 0;
        
        const map1 = new Map();
        const map2 = new Map();
        
        arr1.forEach((str) => {
            map1.set(str, (map1.get(str)??0)+1);
        });
        arr2.forEach((str) => {
            map2.set(str, (map2.get(str)??0)+1);
        });
        
        map1.forEach((value, key) => {            
            size += Math.max(value, map2.get(key) ?? 0);    
            if(map2.has(key)) map2.delete(key);
        });
        
        if(map2.size) {
            size += [...map2.values()].reduce((a,b) => a+b,0)    
        };
        
        return size;
    })();  
    
    if(!intersection && !union) return 65536;
    
    return Math.floor((intersection/union)*65536);
}