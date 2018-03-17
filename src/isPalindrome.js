/**
 * https://leetcode.com/problems/valid-palindrome/description/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var fs = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let j = 0; j < fs.length/2; j++) {
    if (fs[j] !== fs[fs.length - j - 1]) {
      return false
    }
  }
  return true;
};

console.log('isPalindrome', isPalindrome("A man, a plan, a canal: Panama")); // true
console.log('isPalindrome', isPalindrome("race a car")); //false