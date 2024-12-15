/*
- 스택 자료구조로 처리
- 완성된 괄호를 hash로 저장 ex. {')': '('}
- s만큼 2중 반복으로 순회 
    1. 열린 괄호인 경우(!hash[s])stack에 push한다.
    2. 닫힌 괄호인 경우(hash[s])stack의 마지막 값과 비교 하여 정상적인 괄호인지 판단하고 아니면 break로 빠져 나온다.
    3. 위 과정이 끝난 후 stack의 length가 0 이면 answer를 하나 증가시킨다.
    4. 문자열의 첫번째 값을 뒤로 이어 붙인다.
*/
function solution(s) {    
    var answer = 0;
    const hash = {')': '(', ']': '[', '}': '{'};
    
    //회전
    for (const x of s) {
        
        const stack = [];
        let isParentheses = false;
        
        //올바른 괄호 확인
        for(const p of s) {
            //열린 괄호
            if(!hash[p]) {
                stack.push(p)
            }
            //닫힌 괄호
            else {
                isParentheses = stack[stack.length-1] === hash[p];
                if(isParentheses) stack.pop();
                else break;
            }     
        }
        
        if(isParentheses && !stack.length) answer++;
        
        s = s.substring(1)+x;
    };
    
    return answer;
}


