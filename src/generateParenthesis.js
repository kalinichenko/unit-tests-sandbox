/**
 * @param {number} n
 * @return {string[]}
 * if n = 3 =>
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
 */
var generateParenthesis = function(n) {

  function backtrack(ans, cur, open, close, max) {
    // console.log('cur', cur);

    if (cur.length == max * 2) {
        ans.push(cur);
        return;
    }

    if (open < max)
        backtrack(ans, cur+"(", open+1, close, max);
    if (close < open)
        backtrack(ans, cur+")", open, close+1, max);
  }

  const ans = [];
  backtrack(ans, "", 0, 0, n);
  return ans;
};

console.log(generateParenthesis(3));