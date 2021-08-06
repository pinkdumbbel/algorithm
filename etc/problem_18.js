function solution(arr) {
    let answer = [];
    const sortArr = [...arr];
    sortArr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortArr[i]) answer.push(i + 1);
    }

    return answer;
}

const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
//const arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));

