const assert = require('chai').assert;

/**
 * https://leetcode.com/problems/largest-number/description/
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const sorted = nums.map(String).sort((s1, s2) => {
    const i = s2 + s1;
    const j = s1 + s2
    return i - j;
  })

  while (sorted[0]==='0') {sorted.shift()}
  return sorted.length > 0 ? sorted.join('') : '0';
};


assert.equal(largestNumber([10,2]), '210');
assert.equal(largestNumber([3,30,34,5,9]), "9534330");
assert.equal(largestNumber([0, 0]), "0");