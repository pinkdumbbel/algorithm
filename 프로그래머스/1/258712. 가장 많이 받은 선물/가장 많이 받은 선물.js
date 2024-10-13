function solution(friends, gifts) {
    let answer = 0;
    const give = {};
    const score = {};
    
    for(let i = 0; i < friends.length; i++) {
       score[friends[i]] = 0;
        
       for(let j = 0; j < friends.length; j++) {
           if(i === j) continue;
           give[friends[i]] = {...give[friends[i]],[friends[j]]: 0};
       };
    };


    gifts.forEach((gift) => {
        const [giver, taker] = gift.split(' ');
        give[giver][taker] += 1;
        score[giver] += 1;
        score[taker] -= 1;
    });
    
    friends.forEach((giver) => {
       let cnt = 0;
        
       for(const [taker, takeCnt] of Object.entries(give[giver])){
           const giveCnt = give[taker][giver]
           const diff = takeCnt - giveCnt;
           
           if(diff === 0) {               
               cnt += (score[giver] > score[taker] ? 1 : 0);
           } else {
               cnt += (diff > 0 ? 1 : 0)
           };
       }

       answer = Math.max(answer,cnt);
    });
    
    return answer;
}