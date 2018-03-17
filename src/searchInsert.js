/**
 * https://leetcode.com/problems/search-insert-position/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let a = 0;
  let b = nums.length - 1;
  while (b > a) {
    const mid = Math.floor((b + a) / 2);
    if (target === nums[mid]) {
      return mid
    } if (target > nums[mid]) {
      a = mid + 1
    } else {
      b = mid - 1;
    }
  }
  if (target > nums[a]) {
    return a + 1
  }
  return a;
};

console.log('searchInsert', searchInsert([1,3,5,6], 5)); // 2
console.log('searchInsert', searchInsert([1,3,5,6], 2)); // 1
console.log('searchInsert', searchInsert([1,3,5,6], 7)); // 4
console.log('searchInsert', searchInsert([1,3,5,6], 0)); // 0
console.log('searchInsert', searchInsert([2,4,5,6,7,8], 7)) ; //4