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
