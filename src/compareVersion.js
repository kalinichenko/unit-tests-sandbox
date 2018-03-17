const assert = require('chai').assert;

/**
 * https://leetcode.com/problems/compare-version-numbers/description/
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

};

assert.equal(compareVersion("0.1", "1.1"), -1);
assert.equal(compareVersion("1.0.1", "1"), 1);
assert.equal(compareVersion("7.5.2.4", "7.5.3"), 1);