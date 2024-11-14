function solution(record) {
    const answer = [];
    const hash = {};
    const kor = {
        'Enter': '들어왔습니다.',
        'Leave': '나갔습니다.'
    }
    
    record.forEach((user) => {
        const [, id, nickName] = user.split(' ');
        
        if(!nickName) return;
        
        hash[id] = nickName;
    })
    
    record.forEach((user) => {
       const [type, id] = user.split(' ');
       
       if(!kor[type]) return;
        
       const nickName = hash[id];
        
       const str = `${nickName}님이 ${kor[type]}`
       answer.push(str);
    });
    
    return answer;
}