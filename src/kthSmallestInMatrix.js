import {heapInsert, heapRemove} from './utils';

/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const comparator = (a, b) => a > b;
  const ar = [];
  const insert = heapInsert(comparator, ar);
  const remove = heapRemove(comparator, ar);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      insert(matrix[i][j]);
    }
  }
  let res;
  // console.log('ar1', ar);

  for (let z = 1; z <=k; z++) {
    res = remove();
    // console.log('ar', ar);
    // console.log('res', res);

  }
  return res;
};

// console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));
// console.log(kthSmallest([[1,2],[1,3]], 3));
// console.log(kthSmallest([[1,2],[1,3]], 2));
console.log(kthSmallest([[5,5,10,15],[7,10,15,20],[10,11,16,20],[13,18,20,23]], 7));
// [5, 5, 7, 10, 10, 10, 11, 13, 15, 15, 16, 18, 20, 20, 20, 23]
// console.log(kthSmallest([[-5]], 1));

// console.log(kthSmallest([[1,2],[1,3]], 1))