/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const cache = {}
  for (let i = 0; i < numbers.length; i++) {
    cache[numbers[i]] = i;
  }

  for (let j = 0; j < numbers.length; j++) {
    const i = cache[target - numbers[j]];
    if (i != null) {
      return [j+1, i+1];
    }
  }
};


console.log('twoSum', twoSum([-1, 0], -1));
// console.log('twoSum', twoSum([2,7,11,15], 9));