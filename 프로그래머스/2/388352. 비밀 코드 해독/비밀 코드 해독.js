function solution(n, q, ans) {
    let answer = 0;
    const len = 5;
    const checked = Array.from({length: len}, () => false);
    const combis = [];
    
    const getCombis = (L = 0, arr = []) => {
        if(L === len) {
            if(isSorted(arr)) combis.push(arr);
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(!checked[i]) {
                checked[i] = true;
                getCombis(L+1, [...arr, i+1]);
                checked[i] = false;
            };
        };  
    };

    getCombis();
    
    for(const combi of combis) {
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

const isSorted = (arr) => {    
    let prev = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        if(prev > arr[i]) return false;
        prev = arr[i];
    };
    
    return true;    
};
