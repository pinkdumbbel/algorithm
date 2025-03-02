function solution(files) {
  return files.sort((a, b) => {
    const [, headA, numberA] = a.match(/^(\D+)(\d+)/i);
    const [, headB, numberB] = b.match(/^(\D+)(\d+)/i);
    
    const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());
    if (headCompare !== 0) return headCompare;
    
    const numberCompare = parseInt(numberA) - parseInt(numberB);
    return numberCompare;
  });
}