/**
 * 选择排序
 * @param {Array<Number>} arr
 */
const selectionSort = function (arr) {
  arr = Object.assign([], arr)
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
module.exports = selectionSort
