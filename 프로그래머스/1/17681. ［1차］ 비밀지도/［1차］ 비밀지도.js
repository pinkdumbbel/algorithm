function solution(n, arr1, arr2) {
    var answer = [];
    const dic = {
        '0': ' ',
        '1': '#',
    };
    
    const binaryArr1 = arr1.map((c) => c.toString(2).padStart(n,0));
    const binaryArr2 = arr2.map((c) => c.toString(2).padStart(n,0));
    
    const binaryArr = binaryArr1.map((c, i) => {
        const c2 = binaryArr2[i];
        
        return [...c].map((c1,j) => {
            const n1 = Number(c1);
            const n2 = Number(c2[j]);
            
            return n1+n2 === 2 ? '#' : dic[String(n1+n2)];
        }).join('');
    });
    
    return binaryArr;
}