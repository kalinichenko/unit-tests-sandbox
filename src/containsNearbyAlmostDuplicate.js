var assert = require('assert');

/**
 * https://leetcode.com/problems/contains-duplicate-iii/description/
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (nums.length <= 1) return false;

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= Math.max(i - k, 0); j--) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};

assert(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
assert(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
assert(!containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));
assert(containsNearbyAlmostDuplicate([2,2], 3, 0)); // true
assert(containsNearbyAlmostDuplicate([10,15,18,24], 3, 3)); // true
assert(!containsNearbyAlmostDuplicate([24], 3, 3));
