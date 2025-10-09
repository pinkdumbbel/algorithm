/**
 * InsertionSort
 * 정렬되지 않은 리스트의 두번째 원소부터 순회를 시작하여
 * 각 원소를 이미 정렬된 앞부분에서 적절한 위치에 삽입하는 알고리즘이다.
 * 기준값보다 큰 원소들을 오른쪽으로 한 칸씩 시프트하고,
 * 기준값을 올바른 위치에 삽입하여 전체 배열을 정렬한다.
 */
const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (value < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = value;
  }

  return arr;
};

const arr = [5, 3, 4, 2, 1];
console.log(insertionSort(arr));
