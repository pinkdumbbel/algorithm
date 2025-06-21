function solution(orders, course) {
    const answer = [];
    
    orders = orders.map((order) => order.split('').sort().join(''));
    
    const getCombi = (arr, k) => {
        const result = [];
        
        const dfs = (start, path) => {
            if (path.length === k) {
                result.push(path.join(''));
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                dfs(i + 1, path);
                path.pop();
            }
        };
        
        dfs(0, []);
        return result;
    };
    
    
    
    for(const len of course) {
        const map = new Map();
        
        for(const order of orders) {
            const results = getCombi(order, len);
            
            results.forEach((str) => {
                map.set(str, (map.get(str)??0)+1)
            })
        };
        
        const max = Math.max(...[...map.values()]);
        
        if(max < 2) continue;
        
        for(const [key, value] of map.entries()){
            if(max === value) {
                answer.push(key);
            }
        };
    };
    
    return answer.sort();
}