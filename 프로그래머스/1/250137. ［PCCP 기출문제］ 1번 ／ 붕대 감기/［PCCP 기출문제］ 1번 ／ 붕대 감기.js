function solution(bandage, health, attacks) {
    let answer = health;
    let ap = 0;
    let cnt = 0;
    
    const [t,x,y]= bandage;
    
    for(let i = 1; i <= attacks[attacks.length-1][0]; i++) {
        const [attackTime, damage] = attacks[ap];
        
        if(i === attackTime) {
            answer-=damage
            if(answer <= 0) return -1;
            ap++;
            cnt = 0;
        } else {
            answer = answer+x > health ? health : answer+x;
            cnt++;
            if(cnt === t) {
                answer = answer+y > health ? health : answer+y;
                cnt = 0;
            };
        }
    };
    
    return answer;
}