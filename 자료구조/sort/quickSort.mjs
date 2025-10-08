const quickSort = (arr, start, end) => {
  if (start < end) {
    let pivot = divide(arr, start, end);

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }
};

const divide = (arr, start, end) => {
  const pivot = arr[start];
  let lp = start + 1;
  let rp = end;

  while (lp <= rp) {
    while (lp <= end && pivot >= arr[lp]) lp++;

    while (rp >= start + 1 && pivot <= arr[rp]) rp--;

    if (lp <= rp) swap(arr, lp, rp);
  }

  swap(arr, start, rp);

  return rp;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const arr = [3, 5, 2, 4, 1, 7, 8, 6];

console.log("===== 정렬 전 =====");

console.log(arr);
quickSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);
