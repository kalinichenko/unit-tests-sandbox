/**
 * https://leetcode.com/problems/triangle/description/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 1) {
    return triangle[0][0]
  }

  let min = null;
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j]
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1]
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
      }
      if (i === triangle.length - 1) {
        min = min == null ? triangle[i][j] : Math.min(min, triangle[i][j]);
      }
    }
  }
  return min;
};

console.log(minimumTotal([
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
])) // 11

console.log(minimumTotal([
  [2],
])) // 5