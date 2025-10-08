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
