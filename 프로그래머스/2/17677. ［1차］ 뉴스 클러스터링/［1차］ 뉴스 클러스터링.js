function solution(str1, str2) {
    let answer = 0;
    const set1 = createSet(str1);
    const set2 = createSet(str2);

    const intersection = Object.keys(set1).reduce((acc,key) => {
        if(!set2[key]) return acc;
        acc += Math.min(set1[key], set2[key]);
        return acc;
    }, 0);
    
    const union = Object.keys({...set1,...set2}).reduce((acc,key) => {
        acc += Math.max(set1[key]??0, set2[key]??0);
        return acc;
    }, 0);
    
    if(!intersection && !union) return 65536;
    
    return Math.floor((intersection/union)*65536);
}

const createSet = (str) => str.toLowerCase()
                               .split('')
                               .map((_, i, arr) => arr.slice(i,i+2))
                               .map((str) => str.join(''))
                               .filter((str) => (str.match(/[a-z]/g) ?? []).length === 2)
                               .reduce((acc,cur) => {
                                   acc[cur] = (acc[cur]??0)+1
                                   return acc
                               }, {})