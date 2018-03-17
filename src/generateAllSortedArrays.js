function generate(ar1, ar2, ar3, idx1, idx2, idx3, first) {

  if (first) {
    for (let i = idx1; i < ar1.length; i++) {
      const val1 = ar1[i];

      if (idx2 === 0) {
        ar3.push([val1]);
        generate(ar1, ar2, ar3, i+1, idx2, ar3.length - 1, !first);
      } else {
        const cur3 = ar3[idx3];
        const prev = cur3[cur3.length - 1];
        if (prev < val1) {
          cur3.push(val1);
          generate(ar1, ar2, ar3, i+1, idx2, idx3, !first);
        }
      }
    }
  } else {
    for (let i = idx2; i < ar2.length; i++) {
      const val2 = ar2[i];
      const cur3 = ar3[idx3];
      const prev = cur3[cur3.length - 1];
      if (prev < val2) {
        cur3.push(val2);
        generate(ar1, ar2, ar3, idx1, i + 1, idx3, !first);
      }
    }
  }
}
const res = [];
generate([0, 2, 4], [1, 3, 5], res, 0, 0, 0, true)
console.log(res);
