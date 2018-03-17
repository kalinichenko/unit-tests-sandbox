/**
 * https://leetcode.com/problems/word-ladder/description/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.find(t => t === endWord) ) {
    return 0
  }

  const isOnlyLetterDiff = (a, b) => {
    const aa = a.split('');
    const bb = b.split('');

    return aa.reduce((sum, letter, idx) => {
      if (aa[idx] !== bb[idx]) {
        sum++
      }
      return sum;
    }, 0) === 1;
  }

  console.log('wordList', wordList, beginWord, endWord);

  let len = 0;
  const bfs = () => {
    const tmp = [beginWord];
    const visited = Array(wordList.length);
    while(tmp.length) {
      console.log('tmp', tmp, len);

      const word = tmp.shift();
      let changed = false;
      for (let i = 0; i < wordList.length; i++) {
        const anotherWord = wordList[i];
        if (!visited[i] && isOnlyLetterDiff(word, anotherWord)) {
          visited[i] = true;
          if (word === endWord) {
            break;
          } else {
            tmp.push(anotherWord);
            changed = true;
          }
        }
      }
      if (changed) len++;
    }
  }

  bfs();
  return len;
};

console.log('ladderLength', ladderLength("hot", "dog", ["hot","dog"])); // 0
console.log('ladderLength', ladderLength("hot", "dog", ["hot","dog","dot"])); //3
// console.log('ladderLength', ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); //5
// console.log('ladderLength', ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // 0
// console.log('ladderLength', ladderLength("hot", "dog", ["hot","cog","dog","tot","hog","hop","pot","dot"]));
