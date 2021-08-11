function getCnt(arr, mid) {
    let cnt = 1;
    let ep = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - ep >= mid) {
            cnt++;
            ep = arr[i];
        }
    }
    return cnt;
}

function solution(arr, n) {
    let answer = 0;
    arr.sort((a, b) => a - b);
    let lt = 1;
    let rt = arr[arr.length - 1];

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if (getCnt(arr, mid) < n) rt = mid - 1;
        else {
            lt = mid + 1;
            answer = mid;
        }
    }

    return answer;
}

const arr = [1, 2, 8, 4, 9];
console.log(solution(arr, 3));