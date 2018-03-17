/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const cache = []
  for (let i = 0; i < tokens.length; i++) {
    const e = tokens[i];
    if (Number.isInteger(+e)) {
      cache.push(parseInt(e));
    } else {
      const b = cache.pop();
      const a = cache.pop();
      let res;
      switch(e) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '/':
          res = a / b;
          break;
        case '*':
          res = a * b;
          break;
      }
      cache.push(parseInt(res));
    }
  }
  return cache.pop();
};


console.log('evalRPN', evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log('evalRPN', evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log('evalRPN', evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); //22
console.log('evalRPN', evalRPN(["4","-2","/","2","-3","-","-"]));

