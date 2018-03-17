const assert = require('chai').assert;
const {array2tree} = require('./utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root == null) {
    return false;
  }
  if(root.left == null && root.right == null && sum - root.val == 0) return true;

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};

assert.equal(hasPathSum(array2tree([5,4,8,11,null,13,4,7,2,null, null, null, 1]), 22), true);
assert.equal(hasPathSum(array2tree([1,2]), 1), false);