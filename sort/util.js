/**
 * 判断一个数组是否为有序数组
 * @param {Array} arr 输入一个数组
 * @param {Boolean} negative 是否逆序
 * @returns {Boolean} true(有序的) / false(无序的)
 */
const isSorted = function (arr, negative) {
  if (negative)
    arr = arr.reverse()
  return arr.every((item, index, array) => index === array.length - 1 || item <= array[index + 1])
}
module.exports = {
  isSorted
}