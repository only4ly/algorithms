// 测试地址
// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html#%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E5%8F%8C%E5%85%B3%E8%AF%AD%E5%92%96%E5%96%B1
const R = require('ramda')
const split = R.curry((w, str) => str.split(w))
const map = R.curry((f, arr) => arr.map(f))

// Exercise 1
const words = function (str) {
  return split(' ', str)
}
const wordsCurry = split(' ')

// Exercise 1a
const wordsArr = map(words)

// Exercise 2
const filter = R.curry((f, arr) => arr.filter(f))
const match = R.curry((regexp, s) => s.match(regexp))
const filterQs = function (xs) {
  return filter(function (x) { return match(/q/i, x) }, xs)
}
const filterQsp = (() => filterQs)()

// Exercise 3
const reduce = R.curry((f, a, xs) => xs.reduce(f, a))
const _keepHighest = function (x, y) { return x >= y ? x : y }
// 重构这段代码:
/**
 * 找出最大值
 * @param {Array<Number>} xs 数组
 */
const max = function (xs) {
  return reduce(function (acc, x) {
    return _keepHighest(acc, x)
  }, -Infinity, xs)
}
const maxCurry = reduce(_keepHighest, -Infinity)

// Bonus 1:
const slice = R.curry((start, end, arr) => arr.slice(start, end))

// Bonus 2:
const take = slice(0)

// debug in vscode with nodejs
console.log(max([1, 2, 3, 4, 5, 6, 7]))
console.log(maxCurry([1, 2, 3, 4, 5, 6, 7]))
console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']))
console.log(filterQsp(['quick', 'camels', 'quarry', 'over', 'quails']))
console.log(take(4)('hello world'))
console.log(take(4, 'hello world'))

module.exports = {
  words,
  wordsCurry,
  wordsArr,
  filterQs,
  filterQsp,
  max,
  maxCurry,
  take
}
