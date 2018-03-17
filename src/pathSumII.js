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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const res = [];

  function dfs (root, curSum, curPath) {
    if (!root) {
      return;
    }
    console.log(root, curSum, curPath);

    if (!root.left && !root.right) {
      if (curSum + root.val === sum) {
        res.push(curPath.concat(root.val))
      }
    } else {
      if (root.left) {
        dfs(root.left, curSum + root.val, curPath.concat(root.val));
      }
      if (root.right) {
        dfs(root.right, curSum + root.val, curPath.concat(root.val));
      }
    }
  }
  dfs(root, 0, [])
  return res;
};

const tree = array2tree([-2,null,-3]);
console.log(pathSum(tree, -5));