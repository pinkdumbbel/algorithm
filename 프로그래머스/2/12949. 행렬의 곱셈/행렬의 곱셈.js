function solution(arr1, arr2) {
    return arr1.map((rows) => 
                arr2[0].map((_,row) => 
                    rows.reduce((a,b,col) => a + (b*arr2[col][row]),0)))
}

/*
행의 각각 i번째는 
i행 * 곱행렬의 i열

[
    [2, 3, 2], 
    [4, 2, 4], 
    [3, 1, 4]
]	
[
    [5,4,3],
    [2,4,1],
    [3,1,1]
]
*/


