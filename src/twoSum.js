/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  for(let x = 0; x < nums.length; x++) {
    for(let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
  return null;
};

var twoSum2 = function(nums, target) {
  const hashNums = {}
  nums.forEach((element, i) => {
    hashNums[element] = i;
  });
  for(let x = 0; x < nums.length; x++) {
    const y = hashNums[target - nums[x]];
    if (y !== undefined) {
      return [x, y];
    }
  };

}

var twoSum3 = function(nums, target) {
  const hashNums = {}
  for(let x = 0; x < nums.length; x++) {
    const y = hashNums[target - nums[x]];
    if (y !== undefined) {
      return [x, y];
    }
    hashNums[nums[x]] = x;
  }
  return null;
}


console.log(twoSum3([2, 7, 11, 15], 9))