/**
 * https://leetcode.com/problems/unique-paths/description/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let num = 0;
  const memo = []
  for (let t = 0; t < m; t++) {
    memo.push(Array(n).fill(0));
  }


  const backtrack = (a, b) => {
    if ((a === m - 1 && b === n - 1 || memo[a][b] === 1)) {
      num++;
    } else {
      if (a < m - 1) {
        backtrack(a + 1, b);
      }
      if (b < n - 1) {
        backtrack(a, b + 1);
      }
    }
    // console.log(a, b, memo);
    memo[a][b] = 1
  }

  backtrack(0, 0);
  return num;
};

console.log('uniquePaths', uniquePaths(7,3)); // 28

