var climbStairs = function(n) {
  let res = 0;
  // const backtrack = (cur, max) => {
  //   if (cur === max) {
  //     return res++
  //   } else if (cur < max) {
  //     backtrack(cur + 2, max);
  //     backtrack(cur + 1, max);
  //   }
  // }

  // backtrack(0, n)
  if (n < 2) return n

  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
};

console.log('climbStairs', climbStairs(5));

