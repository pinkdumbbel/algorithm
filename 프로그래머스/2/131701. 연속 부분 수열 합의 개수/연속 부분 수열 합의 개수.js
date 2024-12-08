function solution(elements) {    
    let answer = 0;
    const set = new Set();
    const len = elements.length;
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = 0;
            for(let k = j; k <= i+j; k++) {
                const idx = k >= len ? k-len : k;
                sum += elements[idx];  
            };
            set.add(sum);
        }
    };
    
    return set.size;
}

//중복 제거를 위해 Set을 선언
//elements를 순회 하면서 루프 한번 돌 때 마다 elements를 3중 반복으로 실행
//i = 0부터 elements.length-1 까지 순회
//j = 0부터 elements.length-1 까지 순회
//k = j부터 i+j 까지 순회
//k가 순회 하면서 값을 누적하고 루프가 종료되면 Set에 저장 한다.
//Set의 사이를 answer에 누적한다.

