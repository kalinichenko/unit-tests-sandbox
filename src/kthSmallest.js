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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const orderedDFS = (root, callback) => {
    if (!root) {
      return;
    }
    orderedDFS(root.left, callback);
    callback(root.val);
    orderedDFS(root.right, callback);
  }
  const sortedAr = [];
  orderedDFS(root, sortedAr.push.bind(sortedAr));
  console.log('k', k);
  console.log(sortedAr)

  return sortedAr[k - 1];
};

// console.log(kthSmallest(array2tree([3,1,4,null,2]), 1));
// console.log(kthSmallest(array2tree([5,3,6,2,4,1]), 3));

console.log(kthSmallest(array2tree([3,1,4,null,2]), 1));
