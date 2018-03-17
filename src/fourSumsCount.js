/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let res = 0;
  const abcd = [A, B, C, D];

  const backtrack = (arIdx, curVal) => {
    const curAr = abcd[arIdx]
    for (let i = 0; i < curAr.length; i++) {
      if (arIdx < 3) {
        backtrack(arIdx + 1, curVal + curAr[i])
      } else {
        if (curVal + curAr[i]=== 0) {
          res++;
        }
      }
    }
  }

  backtrack(0, 0);
  return res;
};

console.log(fourSumCount([1,2],[-2,-1],[-1,2], [0,2]));