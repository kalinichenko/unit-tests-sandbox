const assert = require('chai').assert;
/**
 * https://leetcode.com/problems/non-decreasing-array/submissions/
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length <= 1) {
    return true;
  }
  let cnt = 0;
  for (let i = 1; i < nums.length && cnt <= 1; i++) {
    if (nums[i] < nums[i-1]) {
      cnt++
      const prevprev = i === 1 ? 0 : nums[i-2];
      if (nums[i] > prevprev) {
        nums[i-1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return cnt <= 1;
};

assert.equal(checkPossibility([4,2,3]), true);
assert.equal(checkPossibility([4,2,1]), false);
// assert.equal(checkPossibility([3,4,2,3]), false);
assert.equal(checkPossibility([3,4,2,5]), true);
assert.equal(checkPossibility([1,3,2]), true);
assert.equal(checkPossibility([1,1,1]), true);
assert.equal(checkPossibility([1,2,5,3,3]), true);