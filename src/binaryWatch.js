/**
 * https://leetcode.com/problems/binary-watch/description/
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  var res = [];
  const backtrack = (max, val, exponent) => {
    if (max === 0) {

      res.push(val);
    } else {
      const nextVal = val + Math.pow(2, exponent);
      if (max > 0 && nextVal < 12 * 64 && nextVal % 60 !== 0) {
        backtrack(max - 1, nextVal, exponent + 1)
      }
      if (exponent < 9) {
        backtrack(max, val, exponent + 1);
      }
    }
  }
  backtrack(num, 0, 0);
  return res
    .sort((a, b) => a - b)
    .map(t => {
      const h = parseInt(t / 64, 10);
      const m = t % 64;
      const mm = m  <= 9 ? '0' + m : m;
      return `${h}:${mm}`;
    });
}

console.log(readBinaryWatch(4));