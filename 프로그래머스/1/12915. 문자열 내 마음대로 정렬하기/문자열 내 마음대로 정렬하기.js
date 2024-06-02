function solution(strings, n) {
    var answer = [];
    strings.sort();
    return strings.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        
        return 0;
    });
}