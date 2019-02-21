const assert = require('chai').assert;

/**
 * https://leetcode.com/problems/remove-k-digits/
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length === k) return '0';
  let nums = num.split('');
  for (let i = 0; i < k; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[j - 1] > nums[j]) {
        nums.splice(j - 1, 1);
        break;
      }
      if (j + 1 === nums.length) {
        nums.splice(j, 1);
      }
    }

    // remove 0s
    while (nums.length > 0 && nums[0] === '0') {
      nums.splice(0, 1);
    }
  }
  return nums.length === 0 ? '0' : nums.join('');
};

assert.equal(removeKdigits('1209', 1), '109');
assert.equal(removeKdigits('1432219', 3), '1219');
assert.equal(removeKdigits('10200', 1), '200');
assert.equal(removeKdigits('10', 2), '0');
assert.equal(removeKdigits('9', 1), '0');
assert.equal(removeKdigits('112', 1), '11');
assert.equal(removeKdigits('1234', 4), '0');
assert.equal(removeKdigits('12', 1), '1');
