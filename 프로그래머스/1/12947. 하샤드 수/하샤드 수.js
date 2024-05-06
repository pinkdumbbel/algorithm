function solution(x) {
    var answer = true;
    let sum = 0;
    let q = x;
    
    while(q > 0) {
        sum += q%10
        q = Math.floor(q/10);
    };
    
    return !(x%sum);
}