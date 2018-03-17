const assert = require('assert');

/**
 * https://leetcode.com/problems/majority-element/description/
 * https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = null;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (candidate === num) {
      count++;
    } else if (count === 0) {
      candidate = num;
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

console.log(majorityElement([3,2,2,1,3]));
// assert(majorityElement([2,2,1,1,1,2,2]) === 2)