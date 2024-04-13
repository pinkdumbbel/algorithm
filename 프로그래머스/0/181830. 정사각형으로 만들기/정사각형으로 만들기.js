function solution(arr) {
    var answer = arr;
    const rows = arr.length;
    const columns = arr[0].length;
    
    if(rows > columns) {
        for(let i = 0; i < rows; i++) {
            for(let j = columns; j < rows; j++) {
                answer[i][j] = 0;
            }       
        }
    } else if(columns > rows){
        const tmp = Array.from({length: columns}, () => 0);
        
        for(let i = rows; i < columns; i++) {
            answer[i] = tmp;    
        }
    };
    
    return answer;
}