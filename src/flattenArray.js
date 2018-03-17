const flatten = (arr) => {
  const res = []
  arr.forEach(element => {
    if (Array.isArray(element)) {
      res.push(...flatten(element));
    } else {
      res.push(element);
    }
  });
  return res;
}

console.log(flatten([1, [2, [3, 4]]]));
