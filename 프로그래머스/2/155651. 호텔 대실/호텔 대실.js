function solution(book_time) {
    let answer = 0;
    const n = book_time.length;
    const times = Array.from({length: 1449}, () => 0);
    const getTime = (time) => {
        const [hour, miunte] = time.split(':').map(Number);
        return (hour*60)+miunte;
    };
    
    for(const [from, to] of book_time) {
        let fromTime = getTime(from);
        let toTime = getTime(to)+9;
        
        for(fromTime; fromTime<=toTime; fromTime++){
            times[fromTime]++;   
        }
    };
    
    return Math.max(...times);
}