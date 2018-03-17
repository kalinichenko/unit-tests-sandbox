const assert = require('chai').assert;

/**
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  let res = [1,1]
  for (let i=2; i<= rowIndex; i++) {
    const next = [1];
    for (let j=0; j<res.length - 1; j++) {
      next.push(res[j] + res[j+1])
    }
    next.push(1);
    res = next;
  }
  return res;
};

assert.deepEqual(getRow(3), [1,3,3,1]);

