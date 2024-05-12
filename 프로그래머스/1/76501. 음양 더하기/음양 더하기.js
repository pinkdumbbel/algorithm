function solution(absolutes, signs) {
    var answer = 123456789;
    
    return absolutes.map((n, i) => signs[i] ? n : -n).reduce((a,b) => a+b,0);
}