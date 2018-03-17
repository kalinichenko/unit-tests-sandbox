/**
 * https://leetcode.com/problems/course-schedule/description/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

  const isCycle = (ar, visited, cur) => {
    for(let j=0; j < ar.length; j++) {
      const dep = ar[j];
      if (dep !== cur && visited[dep]) {

        return true;
      } else {
        visited[dep] = 1;
      }

      if (dep !== cur && prerequisites[dep] && isCycle(prerequisites[dep], visited, cur)) {
        return true;
      }
    }
    return false;
  };

  const visited = new Array(numCourses);
  for (let i = 0; i < prerequisites.length && !visited[i]; i++) {
    if (isCycle(prerequisites[i], visited, i)) {
      return false;
    }
  }
  return true;
};

var canFinish = function(numCourses, prerequisites) {

  const adjacencyList = Array(numCourses);
  for (let j = 0; j < prerequisites.length; j++) {
    const [lessonId, dep] = prerequisites[j];
    const deps = adjacencyList[dep] || [];
    deps.push(lessonId);
    adjacencyList[dep] = deps;
  }
  // console.log('adjeccencyList', adjacencyList);

  const meta = Array(numCourses);

  const dfs = (idx) => {
    // console.log('idx', idx);
    // console.log('meta', meta);

    if (meta[idx] === 2) {
      return false;
    }
    if (meta[idx] === 1) {
      return true;
    }

    const deps = adjacencyList[idx];
    if (!deps) {
      meta[idx] = 2
      return;
    }
    meta[idx] = 1

    for (let y = 0; y < deps.length; y++) {
      if (dfs(deps[y])) {
        return true;
      }
    }
    meta[idx] = 2
  }

  for (let i = 0; i < adjacencyList.length; i++) {
    if (dfs(i)) return false;
  }
  return true;
}



console.log(canFinish(2,[[1,0]])); // true

console.log(canFinish(2, [[1,0],[0,1]])); // false

console.log(canFinish(3, [[1,0],[2,0]])); // true

console.log(canFinish(3, [[1,0],[2,1]])); // true


console.log(canFinish(3, [[0,1],[0,2],[1,2]]));