const swap = (arr, a, b) => {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}
const selectionSort = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    let min = i;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] < ar[i]) {
        min = j;
      }
    }
    swap(ar, i, min);
  };
  return ar;
}

console.log(selectionSort([1, 0]));