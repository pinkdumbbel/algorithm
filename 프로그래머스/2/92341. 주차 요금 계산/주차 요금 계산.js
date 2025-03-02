
function solution(fees, records) {
    const answer = [];
    
    const timeMap = new Map();
    const tmp = new Map();
    const feeMap = new Map();
    
    const sortedNumbers = new Set(records.map((r) => r.split(' ')[1]).sort((a,b) => Number(a)-Number(b)));
    
    const getTime = (t) => {
        const [h, m] = t.split(':').map(Number);
        return (h*60)+m;
    };
    
    const [bt, bf, ut,uf] = fees;
    
    records.forEach((r) => {
        const [time, number, type] = r.split(' ');
        const nt = getTime(time);
        
        if(type === 'IN') {
            tmp.set(number, nt);
            return;
        } 
        const pt = nt - tmp.get(number);
        timeMap.set(number, (timeMap.get(number) || 0)+pt);
        tmp.delete(number);
    });
    
    tmp.forEach((time, number) => {
       const t = timeMap.get(number) || 0;
       const pt = getTime('23:59')-time;

       timeMap.set(number, t+pt);
    });
    
    timeMap.forEach((pt, number) => {
        if(pt <= bt) {
            feeMap.set(number, bf);
        } else {
            feeMap.set(number, bf+(Math.ceil((pt-bt)/ut))*uf);
        };
    });
    
    sortedNumbers.forEach((n) => {
        answer.push(feeMap.get(n));    
    });
    
    return answer;
}