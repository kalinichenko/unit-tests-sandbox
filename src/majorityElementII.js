const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElementII = function(nums) {
  let count1=0;
  let count2=0;
  let delegate1=null;
  let delegate2=null;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === delegate1) {
      count1++
    } else if (num === delegate2) {
      count2++
    } else if (count1 === 0) {
      delegate1 = num;
      count1++
    } else if (count2 === 0) {
      delegate2 = num
      count2++
    } else {
      count1--;
      count2--;
    }
  }
  return [delegate1, delegate2];
};

console.log(majorityElementII([1,1,2,3,4,5])); // [1,2]
