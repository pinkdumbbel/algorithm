function solution(numbers) {
    return Array.from({length: 10}, (_, i) => i).reduce((a,b) => a+(numbers.includes(b) ? 0 : b),0)
}