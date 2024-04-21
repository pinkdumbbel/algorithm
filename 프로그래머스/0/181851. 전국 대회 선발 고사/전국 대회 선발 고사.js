function solution(rank, attendance) {
    var answer = 0;
    const originRank = [...rank];
    const filteredRank = rank.filter((_, i) => attendance[i]).sort((a,b) => a-b).slice(0,3);
    const score = [10000, 100, 1];
    
    filteredRank.forEach((r, i) => {
       answer += (originRank.findIndex((e => e === r)) * score[i]); 
    })
    
    return answer;
}