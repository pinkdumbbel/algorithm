function solution(word) {
    var answer = 0;
    const words = ['A', 'E', 'I', 'O', 'U']; 
    const n = words.length;
    const arr = [];
    
    function dfs(s = '') {
        if(s.length > n) return;
        
        if(s) arr.push(s);
        
        for(const w of words) {
            dfs(s + w);
        }
    };
    
    dfs();
    
    return arr.indexOf(word) + 1;
};