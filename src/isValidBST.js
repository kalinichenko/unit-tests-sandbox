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
 * @return {boolean}
 */
var isValidBST = function(root, min = Number.MAX_VALUE * -1, max = Number.MAX_VALUE) {

  if (root == null) {
    return true
  }

  return root.val > min && root.val < max &&
    isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

// assert.equal(isValidBST(array2tree([5,1,4,null,null,3,6])), false);
// assert.equal(isValidBST(array2tree([2,1,3])), true);
// assert.equal(isValidBST(array2tree([10,5,15,null,null,6,20])), false);
// assert.equal(isValidBST(array2tree([0])), true);
// assert.equal(isValidBST(array2tree([1,1])), false);
assert.equal(isValidBST(array2tree([0,-1])), true);


