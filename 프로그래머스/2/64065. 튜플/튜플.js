function solution(s) {
    const set = new Set();
    
    s.replace('{{','')
     .replace('}}','')
     .split('},{')
     .map((s) => s.split(','))
     .sort((a,b) => a.length-b.length)
     .flat()
     .map(Number)
     .forEach(s => set.add(s)); 
    
    
    return [...set];
}