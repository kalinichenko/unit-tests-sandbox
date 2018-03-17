/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let a = 0;
  let b = nums.length - 1;
  while (b > a) {
    let pivot = Math.floor((b + a) / 2);
    if (nums[pivot] < nums[pivot + 1] && nums[pivot] < nums[b]) {
      b = pivot;
    } else {
      a = pivot + 1;
    }
  }
  return nums[a];
};


console.log('findMin', findMin([3,4,5,1,2])); // 1
console.log('findMin', findMin([4,5,6,7,0,1,2])); //0
console.log('findMin', findMin([2,3,4,5,1])); // 1
