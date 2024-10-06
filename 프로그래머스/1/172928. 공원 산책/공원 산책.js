function solution(park, routes) {
    var answer = [];
    let cp = [];
    const obstacle = [];
    const [maxH, maxW] = [park.length-1, park[0].length-1];
    const directionMap = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    }
    
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[i].length; j++) {
            const s = park[i][j];
            const position = [i,j];
            
            if(s === 'S') {
                cp = position;
            } else if(s === 'X') {
              obstacle.push(position)  
            };
        };
    };
    
    routes.forEach((r) => {
       const [rd, rm] = [r.split(' ')[0], Number(r.split(' ')[1])];
       const [h, w] = directionMap[rd];
       const [moveH, moveW] = [h*rm, w*rm];
       const [currentH, currentW] = cp;
        
       if(moveH !== 0) {
           let ch = currentH;
           
           for(let i = 0; i !== moveH; i += h) {
               ch += h;
               if((ch < 0 || ch > maxH) || park[ch][currentW] === 'X') {
                   ch = currentH;
                   break;
               }   
           }
           cp = [ch, currentW];
       } else if(moveW !== 0) {
         let cw = currentW;
         const p = park[currentH];
         for(let i = 0; i !== moveW; i += w) {
             cw += w;
             if((cw < 0 || cw > maxW) || p[cw] === 'X') {
                   cw = currentW;
                   break;
             }
         };
           
         cp = [currentH, cw];  
       };
        
    });    
    
    return cp;
}