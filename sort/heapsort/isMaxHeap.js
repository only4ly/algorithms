/**
 * judege an array is maxHeap or not
 * @param {Array} arr the array to be judged
 * @returns is maxHeao or not
 */
const isMaxHeap = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('must be array')
  }
  if (!arr.every(item => typeof item === 'number')) {
    throw new Error('must be number array')
  }
  // find lastRoot
  const lastRoot = arr.length / 2
  // let every rootNode have both left and right childNode
  arr.length % 2 === 0 && arr.push(-Infinity)
  return arr.every((item, index) => {
    return index + 1 > lastRoot || (item >= arr[(index + 1) * 2 - 1] && item >= arr[(index + 1)*2 - 1])
  })
}
module.exports = isMaxHeap
