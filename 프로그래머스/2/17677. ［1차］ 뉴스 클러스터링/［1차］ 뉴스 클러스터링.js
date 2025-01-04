function solution(str1, str2) {
    const set1 = createSet(str1);
    const set2 = createSet(str2);
    
     const counter1 = set1.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    const counter2 = set2.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    
    const intersection = Object.keys(counter1).reduce((acc, key) => {
        if (counter2[key]) {
            acc += Math.min(counter1[key], counter2[key]);
        }
        return acc;
    }, 0);

    const union = Object.keys({...counter1, ...counter2}).reduce((acc, key) => {
        acc += Math.max(counter1[key] || 0, counter2[key] || 0);
        return acc;
    }, 0);

    
    return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);

}

const createSet = (str) => str.toLowerCase()
            .split('')
            .slice(0, -1)
            .map((char, idx) => {
                const pair = str.toLowerCase().slice(idx, idx + 2);
                return /^[a-z]{2}$/.test(pair) ? pair : null;
            })
            .filter(Boolean);
