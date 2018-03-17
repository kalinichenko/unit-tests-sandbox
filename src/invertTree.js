import {array2tree} from './utils';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root) {
    const left = root.left;
    root.left = invertTree(root.right)
    root.right = invertTree(left);
  }
  return root;
};


const tree = array2tree([4,2,7,1,3,6,9])
console.log(invertTree(tree));