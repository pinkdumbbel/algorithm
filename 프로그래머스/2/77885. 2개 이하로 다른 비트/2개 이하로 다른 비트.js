function solution(numbers) {
    return numbers.map(n => {
        if (n % 2 === 0) return n + 1;
        let binary = '0' + n.toString(2);
        const lastZero = binary.lastIndexOf('0');
        binary = binary.substring(0, lastZero) + '10' + binary.substring(lastZero + 2);
        return parseInt(binary, 2);
    });
}