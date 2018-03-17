
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = new Array(matrix.length)
  const cols = new Array(matrix[0].length)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 1
        cols[j] = 1
      }
    }
  }


  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows[i] === 1 || cols[j] === 1) {
        matrix[i][j] = 0
      }
    }
  }



  console.log('matrix', matrix);

};

const ar = [[0,1]];
setZeroes(ar);
console.log('ar', ar);
