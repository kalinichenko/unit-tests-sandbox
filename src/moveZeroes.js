/**
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  function swap(ar, a, b) {
    const t = ar[a];
    ar[a] = ar[b]
    ar[b] = t;
  }

  // for (let i = nums.length - 2; i >= 0; i--) {
  //   if (nums[i] === 0) {
  //     for (let j = i; j < nums.length - 1; j++) {
  //       if (nums[j + 1] === 0) {
  //         break;
  //       }
  //       swap(nums, j, j + 1)
  //     }
  //   }
  // }

  var zeroCnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCnt++;
    } else {
      nums[i - zeroCnt] = nums[i]
    }
  }

  for (let j = nums.length - 1; j > nums.length - 1 - zeroCnt; j--) {
    nums[j] = 0;
  }
};

const t = [0,1,0,3,12];
moveZeroes(t)
console.log('moveZeroes', t);
