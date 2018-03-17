const assert = require('assert');
/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let end = strs[0].length;
  for (let i = 1; end > 0 && i < strs.length; i++) {
    end = Math.min(end, strs[i].length);
    while(strs[i-1].substring(0, end) !== strs[i].substring(0, end)) {
      end--
    }
  }

  return strs[0].substring(0, end);
};

assert(longestCommonPrefix(["flower","flow","flight"]) === 'fl');
assert(longestCommonPrefix(["dog","racecar","car"]) === '');