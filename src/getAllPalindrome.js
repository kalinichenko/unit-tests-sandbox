function testPal(arg) {
  return arg == arg.split('').reverse().join('');
}

function getAllPal(arg) {
  var tmp = {};
  for (var i = 0; i < arg.length; i++) { // start position
        for (var j = i + 1; j <= arg.length; j++) { // end position
          const s = arg.slice(i, j);
            if (testPal(s)) {
              tmp[s] = 1
            }
      }
  }
  return Object.keys(tmp);
}

console.log(getAllPal('aab'));