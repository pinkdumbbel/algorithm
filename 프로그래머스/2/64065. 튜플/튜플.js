/*
문자열을 순회 하면서 각 조합을 배열로 만든다.
만들어진 배열을 순회 한다.
배열의 길이로 오름차순 정렬한다.
배열의 원소에 있는 튜플을 오름차순 정렬한다.

조합의 길이만큼 돌면서 
각 튜플을 순회한다. 
그러면 하나씩 answer에 push하면 될듯
*/

function solution(s) {
    const answer = [];
    let combi = [];
    let tmp = [];
    
    s = s.substring(1, s.length-1);
    
    for(const x of s) {
        if(x === '{') continue;
        
        if(x === '}') {
            combi.push(tmp.join('').split(',').filter((s) => !!s));
            tmp = [];
        } else {
            tmp.push(x);
        }
    };
    
    combi = combi.sort((a,b) => a.length - b.length)
    const set = new Set();
    
    for(let i = 0; i < combi.length; i++) {
        for(let j = 0; j < combi[i].length; j++) {
            set.add(Number(combi[i][j]));    
        };
    };
    
    
    
    return [...set];
}

// 중복된 원소 존재 가능
// 튜플의 순서가 같아야 됨 
// 원소의 개수는 정해져 있음
// 튜플을 집합으로 표현한 s가 입력으로 주어짐
// 집합은 순서가 달라도 상관 없음 
// 이때 집합이 표현하는 튜플을 구하라

