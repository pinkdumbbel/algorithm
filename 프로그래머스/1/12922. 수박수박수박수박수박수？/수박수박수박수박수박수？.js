function solution(n) {
    var answer = Array.from({length: n}).reduce((a,b) => {
        const last = a[a.length-1];
        
        return a += last === '수' ? '박' : '수'
    },'');
    
    return answer;
}