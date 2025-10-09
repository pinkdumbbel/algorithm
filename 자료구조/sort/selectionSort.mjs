/**
 * SelectionSort
 * 배열을 순회하며 각 위치에서 남은 원소들 중 가장 작은 값을 찾아서
 * 현재 위치와 교환하는 알고리즘이다.
 * 각 패스마다 가장 작은 원소가 올바른 위치로 이동하며, 이를 반복하여 전체 배열을 정렬한다.
 */
const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    const tmp = arr[i];

    arr[i] = arr[minIdx];
    arr[minIdx] = tmp;
  }

  return arr;
};

const arr = [5, 3, 4, 2, 1];
console.log(selectionSort(arr));
