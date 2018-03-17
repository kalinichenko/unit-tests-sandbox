

// const c = {
//   val: 5,
//   next: {
//     val: 6,
//   }
// }

// const a = {
//   val: 1,
//   next: c
// }

// const b = {
//   val: 2,
//   next: {
//     val: 3,
//     next: c
//   }
// }


// /** list helper functions. start */
// const arrayToList = (ar, i = 0) => ({
//   val: ar[i],
//   next: i + 1 < ar.length && toList(ar, i + 1),
// });

// const listToArray = (l) => {
//   const res = [];
//   while(l) {
//     res.push(l.val);
//     l = l.next;
//   }
//   return res;
// }
// /** list helper functions. end */

require('./src/increasingTriplet');


