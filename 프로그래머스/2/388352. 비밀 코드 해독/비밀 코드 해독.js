function solution(n, q, ans) {
    let answer = 0;
    const len = 5;
    
    const getCombis = () => {
        const combis = [];
        
        const dfs = (L = 0, arr = []) => {
            if(arr.length === len) {
                combis.push(arr);
                return;
            }

            for(let i = L; i < n; i++) {
                dfs(i+1, [...arr, i+1]);
            };      
        }
        
        dfs();
        
        return combis;
    };
    
    for(const combi of getCombis()) {
        let flag = true;
        
        for(let i = 0; i < q.length; i++) {
            const inputs = q[i];
            const cnt = ans[i];
            
            if(combi.filter((c) => inputs.includes(c)).length !== cnt) {
                flag = false;
                break;
            }
        };
        
        if(flag) answer++;
    };
    
    return answer;
}

