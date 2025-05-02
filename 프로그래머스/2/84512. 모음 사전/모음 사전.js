function solution(word) {
    let answer = 0;
    const arr = ['A', 'E', 'I', 'O', 'U'];
    const n = arr.length;
    let flag = false;
    
    const recur = (str = '') => {
        if(flag) return;
        
        if(str.length > n) return;
        if(str === word) flag = true;
        
        if(!flag) answer++;
        
        for(const w of arr) {
            recur(str+w);
        };
    };
    
    recur();
    
    return answer;
}

/*
A
AA
AAA
AAAA
AAAAA

AAAAE
AAAAI
AAAAO
AAAAU

AAAE
AAAI
AAAO
AAAU

AAE
AAI
AAO
AAU
...
*/