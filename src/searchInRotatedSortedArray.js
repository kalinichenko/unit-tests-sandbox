var assert = require('assert');
/*
function binaryFind(arr, target, start, end) {
  if (end <= start) {
    return start;
  }
  const mid = Math.floor((start + end)/2);
  if (arr[mid] > target) {
    binaryFind(arr, target, start, mid)
  } else {
    binaryFind(arr, target, mid + 1, end)
  }
}


function findMinRecur(arr, start, end) {
  if (end <= start) {
    return start;
  }
  const mid = Math.floor((start + end)/2);
  if (arr[mid] > arr[end]) {
    return findMinRecur(arr, mid + 1, end)
  } else {
    return findMinRecur(arr, start, mid);
  }

}

const arr = [3,0,1];
const target = 3;
const pivot = findMinRecur(arr, 0, arr.length - 1);
const arr1 = arr.slice(pivot, arr.length).concat(arr.slice(0, pivot));
console.log(binaryFind(arr1, target, 0, arr.length - 1));

*/

/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, k) {
  let a = 0;
  let b = nums.length - 1;
  while(b > a) {
    let pivot = Math.floor((a + b)/2);
    if (nums[pivot] === k) {
      return true;
    } else if (nums[a] < nums[pivot]) {
      if (nums[a] <= k && nums[pivot] > k) {
        b = pivot - 1
      } else {
        a = pivot + 1
      }
    } else {
      if (nums[pivot] > k && nums[b] <= k) {
        a = pivot + 1
      } else {
        b = pivot - 1
      }
    }
  }
  return nums[a] === k ? a : -1;
};


// console.log('search', search([4,5,6,7,0,1,2,3], 1)) //5
// console.log('search', search([4,5,6,7,0,1,2], 0)) //4
// console.log('search', search([4,5,6,7,0,1,2], 3)) //-1
assert(search([3,1], 1) === 1);
assert(search([1,3], 3) === 1);