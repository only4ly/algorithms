const buildMaxHeap = require('./buildMaxHeap')
/**
 * 堆排序算法
 * @param {Array} arr 输入一个无序数组
 * @returns 一个已排序数组(逆序)
 */
const heapSort = function (arr) {
  let arrCopy = Object.assign([], arr)
  const result = []
  while (arrCopy.length > 2) {
    arrCopy = buildMaxHeap(arrCopy)
    result.push(arrCopy.shift())
  }
  result.concat(arrCopy)
  return result
}
module.exports = heapSort
