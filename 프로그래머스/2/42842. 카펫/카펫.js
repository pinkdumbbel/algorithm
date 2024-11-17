function solution(brown, yellow) {
    const brownMax = (brown-2)/2;
    let row = 1;
    
    for(let i = brownMax; i >= 0; i--) {
        const yellowCnt = (i-2)*row;
        row++;
        
        if(yellowCnt === yellow) {
            return [i, row+1]
        }
    };
    
    return [];
}
