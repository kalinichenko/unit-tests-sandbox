const assert = require('chai').assert;

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let hash = {};
  const array = s.split('');
  for (let left = 0, right = 0; right < array.length; right++) {
    const ch = array[right];
    if (hash[ch] >= left) {
      left = hash[ch] + 1;
    }
    hash[ch] = right;
    max = Math.max(max, right - left + 1);
  }
  return max;
};


assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
assert.equal(lengthOfLongestSubstring("aab"), 2);
assert.equal(lengthOfLongestSubstring("dvdf"), 3)
