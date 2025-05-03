function solution(msg) {
    const answer = [];
    let last = 26;
    const hash = {}
    
    msg.split('')
       .forEach((s) => {
            hash[s] = s.charCodeAt()-64;    
        });

    let tmp = '';
    let i = 0;
    while(i < msg.length) {
        tmp += msg[i];
        
        for(let j = i+1; j < msg.length; j++) {
            tmp += msg[j];
            
            if(!hash[tmp]) {
                hash[tmp] = ++last;
                const key = tmp.slice(0,tmp.length-1);
                i += key.length;
                answer.push(hash[key]);
                tmp = ''
                break;
            }
        }
        
        if(tmp) {
            answer.push(hash[tmp]);
            i += tmp.length;
        }
    };
    
    return answer;
}
