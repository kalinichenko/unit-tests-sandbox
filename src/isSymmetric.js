const {array2tree} = require('./utils');

/**
 * https://leetcode.com/problems/symmetric-tree/description/
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
var isSymmetric = function(root) {
  const isNil = a => a == null;
  const traverse = (a, b) => {
    if (!isNil(a) && !isNil(b)) {
      return a.val === b.val && traverse(a.left, b.right) && traverse(a.right, b.left)
    } else {
      return isNil(a) && isNil(b);
    }
  }

  if (!root) return true;
  return traverse(root.left, root.right);
};


var isSymmetric2 = function(root) {
  const queue = []
  queue.push(root, root);

  while(queue.length > 0) {
    const a = queue.shift();
    const b = queue.shift();
    if (a == null && b == null) {
      continue
    }
    if (a == null || b == null || a.val !== b.val) {
      return false
    }
    queue.push(a.left, b.right, a.right, b.left);
  }
  return true;
};



console.log(isSymmetric2(array2tree([1,2,2]))); //true
console.log(isSymmetric2(array2tree([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5]))); //true
console.log(isSymmetric2(array2tree([1,2,2,null,3,null,3]))); // false


