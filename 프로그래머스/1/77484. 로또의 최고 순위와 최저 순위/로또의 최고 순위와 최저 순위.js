function solution(lottos, win_nums) {
    var answer = [];
    const len = lottos.length;
    
    const score = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    };
    
    const intersections = win_nums.filter((n) => lottos.includes(n));
    const zeros = lottos.filter((n) => n === 0);
    
    const max = intersections.length + zeros.length;
    const min = intersections.length;
    
    
    return [score[max], score[min]];
}