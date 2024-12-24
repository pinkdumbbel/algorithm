function solution(citations) {
    // 내림차순으로 정렬
    const sortedCitations = citations.sort((a, b) => b - a);
    
    // H-Index 계산
    for (let h = 0; h < sortedCitations.length; h++) {
        if (sortedCitations[h] < h + 1) {
            return h;
        }
    }
    
    // 모든 논문이 h-index 조건을 만족하는 경우
    return sortedCitations.length;
}