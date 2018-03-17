var letterCasePermutation = function(S) {
  const backtrack = (res, cur) => {
    if (cur.length === S.length) {
      res.push(cur);
    } else {
      const letter = S.substr(cur.length, 1)
      if (!Number.isInteger(parseInt(letter))) {
        backtrack(res, cur + letter.toLowerCase());
        backtrack(res, cur + letter.toUpperCase());
      } else {
        backtrack(res, cur + letter);
      }
    }
  }

  var res = [];
  backtrack(res, '');
  return res;
};

const res = letterCasePermutation('a1b2c');
console.log('res', res);


