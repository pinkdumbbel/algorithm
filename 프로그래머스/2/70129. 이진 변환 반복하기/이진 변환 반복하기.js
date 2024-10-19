function solution(s) {
    var answer = [];
    let cnt = 0;
    let sum = 0;
    
    while(s !== "1") {
        s = [...s].sort((a,b) => b-a).join('');
        const zeroIdx = s.indexOf('0');
        const zeroLen = zeroIdx >= 0 ? s.substring(zeroIdx).length : 0;
        const len = s.length - zeroLen;
        s = len.toString(2)
        sum+=zeroLen;
        cnt++
    };
    
    return [cnt, sum]
}
