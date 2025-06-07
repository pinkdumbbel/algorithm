const getMaxValue = (arr) => {
    arr.sort((a,b) => a-b);
    
    const min = arr[0];
    let max = 0;
    const measures = [];
    
    for(let i = 1; i <= Math.floor(min/2); i++) {
        if(min%i!==0) continue;
        measures.push(i);
    };
    measures.push(min);
    
    measures.sort((a,b) => b-a);
    
    for(const m of measures) {
        let flag = true;
        for(const a of arr) {
            if(a%m!==0) {       
                flag = false;
                break;
            }
        }
        
        if(flag) {
            max = m;
            break;
        }
    };
    
    return max;
};

function solution(arrayA, arrayB) {
    let answer = 0;
    
    let maxA = getMaxValue(arrayA);
    let maxB = getMaxValue(arrayB);
    
    for(const b of arrayB) {
        if(b%maxA===0) {
            maxA = 0;
            break;
        }
    };
    
    for(const a of arrayA) {
        if(a%maxB===0) {
            maxB = 0;
            break;
        }
    };
    
    return Math.max(maxA, maxB);
}