function solution(word) {
    var answer = 0;
    const words = ['A', 'E', 'I', 'O', 'U']; 
    const n = words.length;
    const arr = [];
    let flag = false;
    
    function dfs(s = '') {
        if(flag || s.length > n) return;
        
        if(s === word) {
            flag = true;
            return;
        }
        
        answer++;
        
        for(const w of words) {
            dfs(s + w);
        }
    };
    
    dfs();
    
    return answer;
};