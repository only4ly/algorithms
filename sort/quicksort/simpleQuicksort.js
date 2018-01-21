/**
 * 简单快速排序算法
 * @param {Array<Number>} arr
 */
const simpleQuicksort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    arr[i] > arr[0] ? right.push(arr[i]) : left.push(arr[i])
  }
  left = simpleQuicksort(left)
  right = simpleQuicksort(right)
  return left.concat([arr[0]]).concat(right)
}
module.exports = simpleQuicksort
