function solution(numbers) {
    const answer = numbers
        .map(String)
        .sort((a,b) => Number(b+a) - Number(a+b))
        .join('');
    
    return Number(answer[0]) > 0 ? answer : '0';
}