function solution(arr, k) {
    var answer = k%2 ? arr.map(n => n * k) : arr.map(n => n + k);
    
    return answer;
}