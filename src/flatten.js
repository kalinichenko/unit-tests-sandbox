const assert = require('chai').assert;
const {array2tree} = require('./utils');

let prev;
const flatten = (root) => {
  if (root == null)
      return;
  flatten(root.right);
  flatten(root.left);
  root.right = prev;
  root.left = null;
  prev = root;
}

const tree = array2tree([1,2,5,3,4,null,6])
flatten(tree)

console.log('res', JSON.stringify(tree));
