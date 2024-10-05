function solution(today, terms, privacies) {
    const answer = [];
    const last = 28;
    const date = new Date(today);
    const map = new Map(terms.map((t) => [t.split(' ')[0], Number(t.split(' ')[1])]));
    
    privacies.forEach((p, idx) => {
        const [ed, t] = p.split(' ');
        const exp = map.get(t);
        
        
        const [y, m, d] = ed.split('.');
        
        let eYear, eMonth, eDate;
        eDate = Number(d) - 1 || last;
        eMonth = Number(m) + (exp%12);
        eYear = eMonth > 12 ? Number(y)+1 : Number(y);
        
        eMonth = (eMonth > 12 ? eMonth-12 : eMonth)+(eDate === last ? -1 : 0);
        eYear = exp >= 12 ? eYear + (Number.parseInt(exp/12)) : eYear;
        
        const expDate = new Date(`${eYear}.${eMonth}.${eDate}`);
        
        if(date > expDate) {
            answer.push(idx+1);
        }
    });
    
    return answer;
}