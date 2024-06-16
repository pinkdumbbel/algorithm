function solution(answers) {
    var answer = [];
    const player1 = [1,2,3,4,5];
    const player2 = [2,1,2,3,2,4,2,5];
    const player3 = [3,3,1,1,2,2,4,4,5,5];
    
    const hash = {};
    
    for(let i = 0; i < answers.length; i++) {
       const answer = answers[i];
       const p1Answer = player1[i%player1.length];
       const p2Answer = player2[i%player2.length];
       const p3Answer = player3[i%player3.length];
        
      if(answer === p1Answer) hash['1'] = (hash['1'] ?? 0) + 1;
      if(answer === p2Answer) hash['2'] = (hash['2'] ?? 0) + 1;
      if(answer === p3Answer) hash['3'] = (hash['3'] ?? 0) + 1;
    };
    
    const max = Math.max(...Object.values(hash));
    
    Object.entries(hash).forEach(([key, val]) => {
        if(val === max) answer.push(Number(key));
    });
    
    return answer;
}