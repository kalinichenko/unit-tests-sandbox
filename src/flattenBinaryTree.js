/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 * Given a binary tree, flatten it to a linked list in-place.

    1
   / \
  2   5
 / \   \
3   4   6

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
 */




function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(3)
const n4 = new TreeNode(4)
const n5 = new TreeNode(5)
const n6 = new TreeNode(6)
const n7 = new TreeNode(7)

n1.left = n2;
n1.right = n5;
n2.left = n3;
n2.right = n4;
n5.right = n6;
// n5.right = n7;


let prev;

var flatten = function(root) {
  if (root == null) return;
  // console.log('root.val', root.val);
  flatten(root.left);
  flatten(root.right);
  console.log('root.val', root.val);
  root.right = prev;
  root.left = null;
  prev = root;
};

flatten(n1)
console.log(JSON.stringify(n1));