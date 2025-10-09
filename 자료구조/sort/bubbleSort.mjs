/**
 * BubbleSort
 * 정렬되지 않은 리스트의 원소들을 순회하며 인접한 두 원소를 비교해서
 * 앞의 원소가 뒤의 원소보다 크면 두 원소의 위치를 교환하는 알고리즘이다.
 * 각 패스마다 가장 큰 원소가 맨 뒤로 이동하며, 이를 반복하여 전체 배열을 정렬한다.
 */
const bubbleSort = (arr) => {
  const n = arr.length;

  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      let tmp = arr[j];
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
};

const arr = [4, 5, 2, 3, 1];
console.log(bubbleSort(arr));
