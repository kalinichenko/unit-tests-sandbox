/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let min = 0;
  for (let i = 0; i< nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= s) {
        const cnt = j - i + 1;
        min = Math.min(cnt, min) || cnt;
        break;
      }
    }
  }
  return min;
};

console.log('minSubArrayLen', minSubArrayLen(7, [2,3,1,2,4,3])); // 2
console.log('minSubArrayLen', minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12])); // 8
console.log('minSubArrayLen', minSubArrayLen(4, [1,4,4])) // 1
