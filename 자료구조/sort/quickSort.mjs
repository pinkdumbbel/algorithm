/**
 * QuickSort
 * 정렬되지 않은 원소 중 특정 지점의 하나의 값을 기준값(pivot)으로 설정한다.
 * 기준값을 기준으로 기준값보다 작은 값들은 왼쪽, 큰 값들은 오른쪽 파티션으로 나누어 정렬한다.
 * 각 파티션에 대해 동일한 방식으로 기준값을 지정하여 파티션을 나눈 후 정렬하는 로직으로 재귀적으로 동작한다.
 * 파티션 과정에서는 왼쪽 포인터(파티션의 첫 번째 인덱스)와 오른쪽 포인터(파티션의 마지막 인덱스)를 설정하고,
 * 왼쪽 포인터는 피벗보다 큰 값을, 오른쪽 포인터는 피벗보다 작은 값을 찾아 두 값을 스왑한다.
 */

const quickSort = (arr, start, end) => {
  const pivot = divide(arr, start, end);

  if (start < pivot - 1) {
    quickSort(arr, start, pivot - 1);
  }

  if (end > pivot) {
    quickSort(arr, pivot, end);
  }
};

const divide = (arr, lp, rp) => {
  const pivotValue = arr[parseInt((lp + rp) / 2)];

  while (lp <= rp) {
    //왼쪽 포인터를 하나씩 증가 하면서 피벗 값 보다 큰 수를 찾기
    while (arr[lp] < pivotValue) lp++;
    //오른쪽 포인터를 하나씩 감소 하면서 피벗 값 보다 작은 수 찾기
    while (arr[rp] > pivotValue) rp--;

    if (lp <= rp) {
      swap(arr, lp, rp);
      lp++;
      rp--;
    }
  }

  return lp;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
//[3, 5, 2, 4, 1, 7, 8, 6];
//[3, 1, 2, 4, 5, 7, 8, 6];

const arr = [3, 5, 2, 4, 1, 7, 8, 6];

console.log("===== 정렬 전 =====");

console.log(arr);
quickSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);
