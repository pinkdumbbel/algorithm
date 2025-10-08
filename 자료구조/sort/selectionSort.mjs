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
