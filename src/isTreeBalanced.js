
var isBalanced = function(root) {
  const depth = (node) => {
    if (!node) {
      return 0;
    } else {
      const r = depth(node.right) + 1;
      const l = depth(node.left) + 1;
      return Math.max(r,l);
    }
  }

  function traverse(node) {
    if (!node) {
      return true;
    }
    const r = depth(node.right);
    const l = depth(node.left);

    return Math.abs(r - l) <= 1 && traverse(node.right) && traverse(node.left);
  }
  return traverse(root);
}


const root = {
  right: {
    right: {
    }
  }
}


console.log(isBalanced(root));