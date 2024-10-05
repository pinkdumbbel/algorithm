function solution(wallpaper) {
    var answer = [];
    const len = wallpaper.length
    let lux = luy = Number.MAX_SAFE_INTEGER;
    let rdx = rdy = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < len; i++) {
        
        for(let j = 0; j < wallpaper[i].length; j++) {
            const s = wallpaper[i][j];
            
            if(s === '#') {
               lux = Math.min(lux, i);
               luy = Math.min(luy, j);
               break;
            };
        }
        
        for(let k = wallpaper[i].length; k >= luy; k--) {
            const s = wallpaper[i][k];
           
            if(s === '#') {
                rdx = Math.max(rdx, i+1);
                rdy = Math.max(rdy, k+1);
               break;
            };
        };
    };
    
    return [lux, luy, rdx, rdy];
}