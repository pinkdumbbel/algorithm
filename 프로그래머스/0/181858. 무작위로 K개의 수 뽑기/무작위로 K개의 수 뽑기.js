function solution(arr, k) {
    var answer = [];
    const set = [...new Set(arr)];
    const n = set.length;
    
    answer = n > k ? set.slice(0,k) : [...set, ...Array.from({length: k-n}, () => -1)];
    
    return answer;
}