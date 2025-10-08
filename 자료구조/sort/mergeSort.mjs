const mergeSort = (arr, start, end) => {
  if (start < end) {
    let mid = parseInt((start + end) / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
};

const merge = (arr, start, mid, end) => {
  let lp = start;
  let rp = mid + 1;

  const tmpArr = Array(end + 1).fill(0);
  let tp = start;

  while (lp <= mid && rp <= end) {
    if (arr[lp] <= arr[rp]) {
      tmpArr[tp] = arr[lp++];
    } else {
      tmpArr[tp] = arr[rp++];
    }

    tp++;
  }

  while (lp <= mid) {
    tmpArr[tp++] = arr[lp++];
  }

  while (rp <= end) {
    tmpArr[tp++] = arr[rp++];
  }

  for (let i = start; i <= end; i++) {
    arr[i] = tmpArr[i];
  }
};

const arr = [3, 5, 2, 4, 1, 7, 8, 6];

console.log("===== 정렬 전 =====");

console.log(arr);
mergeSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);
