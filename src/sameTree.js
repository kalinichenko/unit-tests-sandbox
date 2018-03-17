function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(3)

n1.left = n2;
n1.right = n3;

const n11 = new TreeNode(1)
const n22 = new TreeNode(2)
const n33 = new TreeNode(3)

n11.left = n22;
n11.right = n33;

var isSameTree = function(p, q) {
  console.log('p', p);
  console.log('q', q);


  if (p && q && p.val === q.val) {
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
  }
  if (!p && !q) return true
  else return false;
};

console.log(JSON.stringify(isSameTree(n1, n11)));