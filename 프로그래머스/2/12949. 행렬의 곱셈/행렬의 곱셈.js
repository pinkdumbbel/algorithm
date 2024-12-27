function solution(arr1, arr2) {
    return arr1.map((rows) => 
                arr2[0].map((cols, y) => 
                    rows.reduce((acc, row, x) => {
                        return acc+(row*arr2[x][y])
                    },0)));
};


/*
[[2, 3, 2], [4, 2, 4], [3, 1, 4]],
[
    [5, 4, 3], 
    [2, 4, 1], 
    [3, 1, 1]
]
*/