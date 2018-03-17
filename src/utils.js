

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const swap = (arr, a, b) => {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

const heapInsert = (comparator, heap) => val => {
  heap.push(val);
  if (heap.length > 1) {
    let idx = heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2)
    // console.log(idx, parentIdx)

    while (idx > 0) {
      // console.log('heap', heap);
      // console.log(heap[parentIdx], heap[idx]);

      if (comparator(heap[parentIdx], heap[idx])) {
        swap(heap, parentIdx, idx);
      }

      idx = parentIdx;
      parentIdx = Math.floor(idx / 2);
    }
  }
}

const heapRemove = (comparator, heap) => () => {
  if (!heap.length) return undefined;
  let idx = 0;
  const head = heap[idx];
  heap[idx] = heap.pop();

  while (idx < heap.length - 1) { // is sink up needed ?
    const lIdx = 2 * idx + 1;
    const rIdx = lIdx + 1;
    let childIdx;
    if (lIdx < heap.length && rIdx < heap.length) {
      childIdx = comparator(heap[rIdx], heap[lIdx]) ? lIdx : rIdx;
    } else if (lIdx < heap.length) {
      childIdx = lIdx;
    } else if (rIdx < heap.length) {
      childIdx = rIdx;
    }

    // console.log('heap', heap);

    if (childIdx && comparator(heap[idx], heap[childIdx])) {
      swap(heap, idx, childIdx);
    }

    idx = childIdx;
  }

  return head;
}

const partition = (ar, a , b) => {
  const pivot = a;
  let i = a + 1;
  let j = b;
  // console.log('ar, a, b', ar, a, b);

  while(true) {
    while(i < b && ar[i] < ar[pivot]) i++;
    while(j > a && ar[j] >= ar[pivot]) j--;
    if (i >= j) break;
    // console.log('i, j', i, j);

    swap(ar, i, j);
  }
  swap(ar, pivot, j);
  return j;
}

const quickSelect = (ar, k) => {
  let a = 0
  let b = ar.length - 1;
  // console.log('ar, k', ar, k);
  while (b > a) {
    const pivot = partition(ar, a, b);
    // console.log('ar, pivot', ar, pivot);
    // if (k <= pivot + 1) {
    if (ar.length - pivot - 1 < k) {
      b = pivot;
    } else {
      a = pivot + 1;
    }
    // console.log('abk', a, b, k);

  }
  return ar[a];
}

const compareTo = (a, b) => a < b;
// console.log('partition', partition([2,1], 0, 1));

// console.log('quickSelect', quickSelect([2,1], 1, compareTo)); //2 // 1

// console.log('quickSelect', quickSelect([1, 2, 3], 3, compareTo)); //3 // 1
// console.log('quickSelect', quickSelect([3,2,1,5,6,4], 5, compareTo)); // 5 //2
// console.log('quickSelect', quickSelect([3,2,3,1,2,4,5,5,6], 4, compareTo)); //3 //4


module.exports = {
  listToArray: (l) => {
    const res = [];
    while(l) {
      res.push(l.val);
      l = l.next;
    }
    return res;
  },
  array2tree: (ar) => {
    const queue = [];

    function bfs() {
      while(ar.length > 0) {
        const node = queue.shift();

        const leftVal = ar.shift()
        if (leftVal != null) {
          let left = new Node(leftVal);
          queue.push(left);
          node.left = left;
        }

        const rightVal = ar.shift();
        if (rightVal != null) {
          let right = new Node(rightVal);
          queue.push(right);
          node.right = right;
        }
      }
    }

    const root = new Node(ar.shift())
    queue.push(root);
    bfs();
    return root;
  },
  heapInsert,
  heapRemove,
}

// const ar = [];
// const comparator = (a, b) => a > b;
// const insert = heapInsert(comparator, ar);
// [5,5,10,15,7,10,15,20,10].forEach (insert);
// ,11,16,20,13,18,20,23
// insert(4);
// insert(3);
// insert(5);
// insert(1);
// insert(2);


// console.log('heap', ar);

// const remove = heapRemove(comparator, ar);
// remove();
// remove();
// remove();
// remove();

// console.log('heap', ar);
