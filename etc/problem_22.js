function getCount(arr, mid) {
    let cnt = 1;
    let sum = 0;

    for (x of arr) {
        if (sum + x > mid) {
            cnt++;
            sum = x;
        }
        else sum += x;
    }

    return cnt;
}

function solution(arr, n) {
    let answer = 0;
    let lt = Math.max(...arr), rt = arr.reduce((a, b) => a + b, 0);
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (getCount(arr, mid) <= n) {
            answer = mid;
            rt = mid - 1;
        } else if (getCount(arr, mid) > n) lt = mid + 1;
    }

    return answer;
}

//6 15 24 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(arr, 3));