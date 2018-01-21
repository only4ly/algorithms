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
/**
 * 创建一个随机数组, 可以指定长度、最大边界、最小边界
 * @param {Number} len 数组长度
 * @param {Number} min 数组元素最小边界
 * @param {Number} max 数组元素最大边界
 */
const createRandomArray = function (len, min, max) {
  len === undefined && (len = 1000)
  min === undefined && (min = 0)
  max === undefined && (max = 1000)
  const randomArray = []
  for (let i = 0; i < len; i++) {
    randomArray.push(~~(Math.random() * max) + min)
  }
  return randomArray
}
module.exports = {
  isSorted,
  createRandomArray
}