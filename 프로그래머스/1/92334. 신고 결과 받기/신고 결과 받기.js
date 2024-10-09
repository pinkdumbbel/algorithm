function solution(id_list, report, k) {
    var answer = [];
    const resultHash = {};   
    const reportHash = {};
    const reporteeHash = {};
    
    id_list.forEach((id) => {
        reporteeHash[id] = 0;
        resultHash[id] = 0;
    });
    
    report.forEach((r) => {
        const [a,b] = r.split(' ');
        
        if(reportHash[a]?.[b]) return;
        
        reportHash[a] = {
             ...reportHash[a],
             [b]: true
        }
        
        if(reporteeHash[b] === k) return;
        
        reporteeHash[b] += 1; 
    });
    
    Object.entries(reporteeHash).forEach(([reportee, cnt]) => {
        if(cnt !== k) return;
        
        Object.entries(reportHash).forEach(([reporter, reportee2]) => {
            if(Object.keys(reportee2).includes(reportee)) {
                resultHash[reporter] += 1
            }
        });
    });
    
    return id_list.map((id) => resultHash[id]);
}