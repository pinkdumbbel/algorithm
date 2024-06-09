function solution(a, b) {    
    const diffMap = {
        '0': 'FRI',
        '1': 'SAT',
        '2': 'SUN',
        '3': 'MON',
        '4': 'TUE',
        '5': 'WED',
        '6': 'THU',
    };
    
    const week = 7;
    let sumDays = 0;
    
    for(let i = 1; i <= a-1; i++) {
        sumDays += i === 2 ? 29 : (30+(i%2));
    };
    
    const diff = ((sumDays + b - 1)%7) + (a-1 === 8 ? 1 : 0);
    
    return diffMap[diff];
}