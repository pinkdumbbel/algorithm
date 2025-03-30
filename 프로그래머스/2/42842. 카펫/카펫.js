function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let width = parseInt(total/3); width >= 2; width--) {
        if(total%width == 0) {
            const height = total/width;
            if((width-2)*(height-2) === yellow) return [width, height]
        };
    };
    
    return [];
}
