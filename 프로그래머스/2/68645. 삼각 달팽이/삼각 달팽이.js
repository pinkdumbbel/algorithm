function solution(n) {
    const answer = Array.from({ length: n }, () => new Array(n).fill(0));    
    let num = 1;
    let x = 0, y = 0;
    
    for(let i=n; i>0; i-=3) {
        for(let down = 0; down < i; down++) answer[y++][x] = num++;
        y--;
        x++;
        
        for(let right = 0; right < i-1; right++) answer[y][x++] = num++;
        y--;
        x-=2;    
        
        for(let u = 0; u < i-2; u++) answer[y--][x--] = num++;
        y+=2;
        x++;
    };
    
    
    return answer.flat().filter((v) => v>0);
}

