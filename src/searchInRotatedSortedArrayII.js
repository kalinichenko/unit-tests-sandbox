var assert = require('assert');

/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let a = 0;
  let b = nums.length - 1;
  while (b > a) {
    console.log('a', a);

    const middle = Math.floor((b+a)/2);
    if (nums[middle] === target) {
      return true;
    } else if ((nums[a] == nums[middle]) && (nums[b] == nums[middle])) {
      ++a; --b;
    } else if (nums[a] <= nums[middle]) {
      if (nums[a] <= target && target < nums[middle]) {
        b = middle - 1
      } else {
        a = middle + 1
      }
    } else {
      if (nums[middle] < target && target <= nums[b]) {
        a = middle + 1
      } else {
        b = middle - 1;
      }
    }
  }

  return nums[a] === target;
};


// assert(search([2,5,6,0,0,1,2], 0));
// assert(!search([2,5,6,0,0,1,2], 3));
// assert(search([3,1], 1));
// assert(search([1,3], 3));
assert(search([1,3,1,1,1], 3));