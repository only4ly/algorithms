/**
 * an function to create an maxHeap (pure function)
 * @param {Array<Number>} arr an unsort array
 * @returns {Array<Number>} an maxHeap array
 */
const buildMaxHeap = function (arr) {
  arr = Object.assign([], arr)
  const len = arr.length
  len % 2 === 0 && arr.push(-Infinity)
  const lastRoot = ~~(arr.length / 2) - 1
  for (let i = lastRoot; i >= 0; i--) {
    arr = maxHeap(arr, i)
  }
  return arr.slice(0, len)
}
/**
 * given an array, build the child maxHeap from index
 * @param {Array<Number>} arr the given array
 * @param {Number} index of the rootNode of child heap
 */
const maxHeap = function (arr, index) {
  while (true) {
    const left = 2 * index + 1
    const right = 2 * index + 2
    if (right > arr.length) {
      break
    }
    if (arr[index] >= arr[left] && arr[index] >= arr[right]) {
      break
    } else if (arr[left] > arr[right]) {
      let temp = arr[index]
      arr[index] = arr[left]
      arr[left] = temp
      index = left
    } else {
      let temp = arr[index]
      arr[index] = arr[right]
      arr[right] = temp
      index = right
    }
  }
  return arr
}
module.exports = buildMaxHeap
