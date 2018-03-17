/**
 * https://leetcode.com/problems/isomorphic-strings/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const dictAB = {}
  const dictBA = {}

  const a = s.split('');
  const b = t.split('');

  const c = a.map((l, index) => {
    if (dictBA[b[index]] && !dictAB[l]) {
      return l;
    }
    if (!dictAB[l]) {
      dictAB[l] = b[index];
      dictBA[b[index]] = l;
    }
    return dictAB[l];
  })
  return c.join('') === t;
};

console.log('isIsomorphic', isIsomorphic("foo", "bar")); // f
console.log('isIsomorphic', isIsomorphic("paper", "title")); // t
console.log('isIsomorphic', isIsomorphic("ab", "aa")); // f