function solution(clothes) {
    let answer = 0;
    const hash = {};
    
    clothes.forEach(([_, type]) => {
        if(hash[type]) {
            hash[type]++
        } else {
            hash[type] = 1;
        }
    });
    
    const values = Object.values(hash);
    
// [1,2,3,4];
// 2개씩 하는경우
// 2 + 3 + 4 + 6 + 8 + 12;

// 3개씩 
// 6 + 12 + 24

// 4개씩
// 24
    
    return Object.values(hash).reduce((a,b) => a+(a*b),1)-1;
}