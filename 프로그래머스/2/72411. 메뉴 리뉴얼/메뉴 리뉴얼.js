function solution(orders, course) {
    // 각 주문을 알파벳 순으로 정렬
    const sortedOrders = orders.map(order => 
        order.split('').sort().join('')
    );
    
    // 조합 생성 함수
    const generateCombinations = (arr, k) => {
        const result = [];
        const dfs = (start, path) => {
            if (path.length === k) {
                result.push(path.join(''));
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                dfs(i + 1, path);
                path.pop();
            }
        };
        dfs(0, []);
        return result;
    };
    
    // 조합 빈도수 카운팅
    const frequency = {};
    for (const order of sortedOrders) {
        const chars = order.split('');
        for (const len of course) {
            if (chars.length < len) continue;
            const combinations = generateCombinations(chars, len);
            for (const combo of combinations) {
                frequency[combo] = (frequency[combo] || 0) + 1;
            }
        }
    }

    // 코스 길이별 최다 주문 조합 추출
    const result = [];
    for (const len of course) {
        const candidates = Object.keys(frequency).filter(combo => 
            combo.length === len && frequency[combo] >= 2
        );
        if (candidates.length === 0) continue;
        
        const maxCount = Math.max(...candidates.map(c => frequency[c]));
        const maxCombos = candidates.filter(c => frequency[c] === maxCount);
        result.push(...maxCombos);
    }

    // 최종 정렬 후 반환
    return result.sort();
}
