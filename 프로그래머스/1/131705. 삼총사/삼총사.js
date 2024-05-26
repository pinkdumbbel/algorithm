function solution(number) {
    let answer = 0;
    const n = number.length;
    
    for(let i = 0; i < n; i++) {
        const ni = number[i];
        for(let j = i+1; j < n; j++) {
            const nj = number[j];
            for(let k = j+1; k < n; k++) {
                const nk = number[k];
                if(ni + nj + nk === 0) answer++;
            }
        }
    };
    
    return answer;
}