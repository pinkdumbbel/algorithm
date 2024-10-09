function solution(id_list, report, k) {
    const reports = [...new Set(report)].map((r) => r.split(' '));
    
    const cntMap = new Map();
    const reportMap = new Map();
    
    reports.forEach(([reporter, reportee]) => {
        cntMap.set(reportee, (cntMap.get(reportee)??0)+1)
    });
        
    reports.forEach(([reporter, reportee]) => {
        const cnt = cntMap.get(reportee);
        if(cnt < k) return;    
        reportMap.set(reporter, (reportMap.get(reporter)??0)+1)
    });
    
    return id_list.map((id) => reportMap.get(id) ?? 0);
}