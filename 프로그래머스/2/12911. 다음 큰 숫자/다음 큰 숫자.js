function solution(n) {
    const tmp = n.toString(2);
    while(true) {
      n += 1;
      const bin = n.toString(2);
        
      if(tmp.match(/1/g).length === bin.match(/1/g).length) return n;
    };
}