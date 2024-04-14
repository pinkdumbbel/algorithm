function solution(order) {
    var answer = 0;
    const ame = []
    
    order.forEach((value) => {answer+= value.includes('americano') || value === 'anything' ? 4500 : 5000});
    
    
    return answer;
}