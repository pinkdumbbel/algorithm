function solution(picture, k) {
    var answer = [];
    const arr = picture.map(s => [...s].map((el) => el.repeat(k)).join(''));
    
    for(const x of arr) {
        for(let i = 0; i < k; i++) {
            answer.push(x);
        };
    }
    
    return answer;
}