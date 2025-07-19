function solution(relation) {
    const rowCount = relation.length;
    const colCount = relation[0].length;
    
    // 조합 생성 함수
    function getCombinations(arr, size) {
        if (size === 1) return arr.map(x => [x]);
        
        const result = [];
        arr.forEach((fixed, index) => {
            const rest = arr.slice(index + 1);
            const combinations = getCombinations(rest, size - 1);
            combinations.forEach(combination => {
                result.push([fixed, ...combination]);
            });
        });
        
        return result;
    }
    
    const candidateKeys = [];
    
    // 1개부터 전체 컬럼까지 모든 크기의 조합 확인
    for (let size = 1; size <= colCount; size++) {
        const columns = Array.from({length: colCount}, (_, i) => i);
        const combinations = getCombinations(columns, size);
        
        for (let combo of combinations) {
            // 최소성 검사
            let isMinimal = true;
            for (let key of candidateKeys) {
                if (key.every(k => combo.includes(k))) {
                    isMinimal = false;
                    break;
                }
            }
            
            if (!isMinimal) continue;
            
            // 유일성 검사
            const tuples = new Set();
            let isUnique = true;
            
            for (let i = 0; i < rowCount; i++) {
                let tuple = combo.map(col => relation[i][col]).join(',');
                
                if (tuples.has(tuple)) {
                    isUnique = false;
                    break;
                }
                tuples.add(tuple);
            }
            
            if (isUnique) {
                candidateKeys.push(combo);
            }
        }
    }
    
    return candidateKeys.length;
}
