/**
 * 快速排序算法 哨兵法 一层包装
 * 详细过程以及分析请看大佬作品,此处不再赘述-----> http://developer.51cto.com/art/201403/430986.htm 
 * @param {Array<Number>} arr
 */
const quicksort = function (arr) {
  arr = Object.assign([], arr)
  quick(arr, 0, arr.length - 1)
  return arr
}
/**
 * 快速排序算法 哨兵法 递归函数
 * @param {Array<Number>} arr 待排序数组
 * @param {Number} startIndex 子数组起始index
 * @param {Number} endIndex 子数组结束index
 */
const quick = function (arr, startIndex, endIndex) {
  let i = startIndex
  let j = endIndex
  while (j > i) {
    // 哨兵j出动 寻找一个小于arr[i]的值
    for (let k = j; k >= i; k--) {
      if (k === i) {
        j = k
        break
      }
      if (arr[k] < arr[startIndex]) {
        j = k
        break
      }
    }
    for (let k = i; k <= j; k++) {
      if (k === j) {
        i = k
        break
      }
      if (arr[k] > arr[startIndex]) {
        i = k
        break
      }
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // 循环结束时应有: i===j===k
  let temp = arr[i]
  arr[i] = arr[startIndex]
  arr[startIndex] = temp
  // 至此完成一趟快速排序,一个元素归位,递归被划分出来的两个数组
  if (i > startIndex) {
    quick(arr, startIndex, i - 1)
  }
  if (i < endIndex) {
    quick(arr, i + 1, endIndex)
  }
}
module.exports = quicksort
