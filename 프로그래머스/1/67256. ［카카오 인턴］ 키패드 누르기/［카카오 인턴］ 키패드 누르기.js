function solution(numbers, hand) {
    var answer = '';
    const arr = [
     [1,2,3],
     [4,5,6],
     [7,8,9],
     ['*',0,'#'],
    ];
    
    const map = new Map();
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            map.set(arr[i][j], [i,j])
        }
    };
    
    let lp = map.get('*');
    let rp = map.get('#');
    
    numbers.forEach(n => {
       const p = map.get(n);
       
       if(p[1] === 0) {
          answer += 'L';
          lp = p;
       } else if(p[1] === 2) {
          answer += 'R';
          rp = p;
       } else {
         const [currentA, currentB] = p;
         const [leftA, leftB] = lp;
         const [rightA, rightB] = rp;
         const leftDiff = Math.abs(currentA - leftA) + Math.abs(currentB - leftB);
         const rightDiff = Math.abs(currentA - rightA) + Math.abs(currentB - rightB);
           
         if(leftDiff < rightDiff) {
             answer += 'L'
             lp = p;
         } else if(leftDiff > rightDiff) {
             answer += 'R'
             rp = p;
         } else {
             const isLeft = hand==='left'
             answer += isLeft ? 'L' : 'R'
             
             if(isLeft) {
                 lp = p
             } else {
                 rp = p;
             }
         };   
       };
        
    });
    
    return answer;
}