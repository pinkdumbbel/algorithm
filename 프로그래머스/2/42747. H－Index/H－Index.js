/*
1. 오름차순 정렬
2. 중간값 찾음 
3. 중간값 기준 오른쪽은 h편 이상 왼쪽은 h편 이하
4. -- 순회 시작
5. citations.length - i 가 h 이상이면 해당하는 h를 반환 
*/

11-5
[0,1,2,3,4,5,6,7,8,9,10];

function solution(citations) {
    citations.sort((a,b) => a-b);
    const n = citations.length;
    
    for(let i = parseInt(citations.length/2); i >= 0; i--) {
        console.log(i);
        const h = citations[i];
        if(n-i >= h) return h;
    };
    
    return answer;
}
