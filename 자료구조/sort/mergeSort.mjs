/**
 * MergeSort
 * 배열의 정렬되지 않은 원소들을 절반씩 쪼개서 정렬 후 합치는 알고리즘이다.
 * 기본적으로 재귀로 구현되며 더 이상 쪼갤 수 없는 경우(원소가 하나 남을 때)까지 배열을 쪼갠 후
 * 임시배열을 만들어 정렬을 한 이후에 원본배열에 덮어쓰는 방식으로 구현된다.
 * 정렬을 하는 로직은 중간 지점을 기준으로 왼쪽 포인터와 오른쪽 포인터를 두고
 * 서로 값을 비교하며 작은 값을 임시 배열에 저장한다.
 */

const mergeSort = (arr, start, end) => {
  if (start < end) {
    const mid = parseInt((start + end) / 2);

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

  while (lp <= mid) tmpArr[tp++] = arr[lp++];
  while (rp <= end) tmpArr[tp++] = arr[rp++];

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
