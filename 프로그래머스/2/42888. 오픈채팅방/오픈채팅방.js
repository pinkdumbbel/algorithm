function solution(record) {
    const answer = [];
    const map = new Map();
    
    record.forEach((r) => {
        const [type, uid, nickName] = r.split(' ');
        
        if(type !== 'Leave') {
          map.set(uid, nickName);    
        }
    });
    
    record.forEach((r) => {
        const [type, uid, nickName] = r.split(' ');
        const currentNickName = map.get(uid);
        
        if(type !== 'Change') {
          const message = `${currentNickName}님이 ${type === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
          answer.push(message)  
        }
    });
    
    return answer;
}