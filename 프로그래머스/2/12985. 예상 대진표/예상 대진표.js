function solution(n,a,b){
    var answer = 1;

    for(let i = 0; i < n; i++) {        
        if(a%2) {
            if(a+1 === b) return answer;
        } else {
            if(a-1 === b) return answer;
        }
        
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        
        answer++;
    };
    
    return answer;
}

//N번만큼 순회
//순회 하면서 answer를 하나 증가 
//루프가 하나씩 돌 때마다 현재 참가번호/2 올림처리
//올림처리된 값의 홀/짝을 판별하여 반복적으로 처리하다가 a와 b가 n-1과 n이 되는 순간에 answer를 리턴한다.