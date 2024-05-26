function solution(n) {
    var answer = 0;
    const tmp = [];
    let d = Math.floor(n/3);
    let q = n%3;
    
    tmp.push(q);
    
     while(d > 0) {
        q = d%3;
        d = Math.floor(d/3);
         
        tmp.push(q); 
     };
    
    
    return tmp.reverse().reduce((a,b,idx) => {
        return a + ((3**idx) * b);
    }, 0);
}