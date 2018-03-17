/**
 * https://leetcode.com/problems/reverse-integer/description/
 * @param {number} x
 * @return {number}
 *
 * Input: 123
 * Output: 321
 *
 * Input: -123
 * Output: -321
 *
 * Input: 120
 * Output: 21
 */
var reverse1 = function(x) {
    var res = 0;
    const s = '' + Math.abs(x);
    for (let i = 0; i < s.length; i++) {
      const base = parseInt(s.substr(i, 1));
      res += base * Math.pow(10, i);
    }

    if (x > 0) {
      return res > Math.pow(2, 31 ) ? 0 : res;
    } else {
      return res >= Math.pow(2, 31 ) ? 0 : -1 * res;
    }
};

var reverse2 = function(x) {
  var res = 0;
  while(x !== 0) {
    const base = x%10;
    console.log(base);
    res = res * 10 + base;
    x = parseInt(x/10);
  }
  return res;
}

console.log('res', reverse2(-2123));