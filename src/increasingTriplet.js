const assert = require('chai').assert;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (!nums || nums.length < 3) {
    return false;
  }
  let small = Number.MAX_VALUE;
  let big = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small=nums[i]
    } else if (nums[i] <= big) {
      big = nums[i]
    } else {
      return true;
    }
  }
  return false;
};

assert.equal(increasingTriplet(), false);
assert.equal(increasingTriplet([1,2]), false);
assert.equal(increasingTriplet([1,2,3,4,5]), true);
assert.equal(increasingTriplet([2,1,5,0,3]), false);
assert.equal(increasingTriplet([1,6,3,9,5]), true);
assert.equal(increasingTriplet([5,1,5,5,2,5,4]), true);
