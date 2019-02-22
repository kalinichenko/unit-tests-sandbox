const assert = require('chai').assert;

/**
 * https://leetcode.com/problems/smallest-range-ii/
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  console.log('A', A, K)
  if (A.length <= 1) {
    return 0;
  }
  let [min, max] = A.reduce((acc, element) => {
    if (element < acc[0]) {
      return [element, acc[1]];
    } else if (element > acc[1]) {
      return [acc[0], element];
    }
    return acc;
  }, [A[0], A[0]]);

  if (K === 0) {
    return max - min;
  }

  let [nextMin, nextMax] = A.reduce(([min, max], element) => {
    console.log('element', element)
    console.log('min', min)
    console.log('max', max)
    const a = element + K;
    const b = element - K;
    if (a >= min && a <= max || b >= min && b <= max) {
      return [min, max]
    }
    return Math.abs(b - min) > Math.abs(max - a) ? [min, a] : [b, max];
  }, max - min > K ? (max - min)/2 > K ? [min + K, max - K] : [max - K, min + K] : [min + K, max + K]);

  return nextMax - nextMin;

};



const smallestRange = (A, K) => {
  A.sort();
  const n = A.length;
  let res = A[n - 1] - A[0];
  for (let i = 0; i < n - 1; i++) {
      const max = Math.max(A[i] + K, A[n - 1] - K); //12
      const min = Math.min(A[i + 1] - K, A[0] + K); // 7
      res = Math.min(res, max - min);
  }
  return res;
}

// assert.equal(smallestRangeII([1], 0), 0);
// assert.equal(smallestRangeII([0,10], 0), 10);

// assert.equal(smallestRangeII([0,10], 2), 6);
// assert.equal(smallestRangeII([1,3,6], 3), 3);
// assert.equal(smallestRangeII([7,8,8], 5), 1);

assert.equal(smallestRange([4,8,2,7,2], 5), 6); // 2,4,7,8