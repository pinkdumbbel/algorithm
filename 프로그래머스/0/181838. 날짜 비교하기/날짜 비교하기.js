function solution(date1, date2) {
    const parsedDate1 = date1.join('-');
    const parsedDate2 = date2.join('-');
    
    return new Date(parsedDate1) < new Date(parsedDate2) ? 1 : 0;
}