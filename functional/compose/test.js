// 代码组合（compose）
const _ = require('ramda')
const accounting = require('accounting')
const compose = (f, g) => (x) => f(g(x))
const exclaim = (x) => `${x}!`
const toUpperCase = (x) => x.toUpperCase()
const shout = compose(exclaim, toUpperCase)
const head = x => x[0]
const util = require('../util')
const add = util.add
const reduce = util.reduce
const map = util.map
const replace = util.replace
// revesre 居然不是纯函数 惊呆了
const reverse = x => Object.assign([], x).reverse()
const last = compose(head, reverse)
// const accounting = require('accounting')

// 示例数据
// const CARS = [
//   { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
//   { name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
//   { name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
//   { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
//   { name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
//   { name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false }
// ]

// 练习 1:
// ============
// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
const isLastInStock = function (cars) {
  const lastCar = _.last(cars)
  return _.prop('in_stock', lastCar)
}
const isLastInStockRe = _.compose(_.prop('in_stock'), _.last)

// 练习 2:
// ============
// 使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name
const nameOfFirstCar = _.compose(_.prop('name'), _.head)

// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
const _average = function (xs) { return reduce(add, 0, xs) / xs.length } // <- 无须改动
const averageDollarValue = function (cars) {
  const dollarValues = map(function (c) { return c.dollar_value }, cars)
  return _average(dollarValues)
}
const averageDollarValueRe = _.compose(_average, map(_.prop('dollar_value')))

// 练习 4:
// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。
const _underscore = replace(/\W+/g, '_') // <-- 无须改动，并在 sanitizeNames 中使用它
const toLowerCase = str => str.toLowerCase()
const sanitizeName = _.compose(_underscore, toLowerCase, _.prop('name'))
const sanitizeNames = map(sanitizeName)

// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

const availablePrices = function (cars) {
  const availableCars = _.filter(_.prop('in_stock'), cars)
  return availableCars.map(function (x) {
    return accounting.formatMoney(x.dollar_value)
  }).join(', ')
}
const moneys = x => accounting.formatMoney(x.dollar_value)
const join = _.curry((x, arr) => arr.join(x))
const availablePricesRe = _.compose(join(', '), map(moneys), _.filter(_.prop('in_stock')))

// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()

const fastestCar = function (cars) {
  const sorted = _.sortBy(function (car) { return car.horsepower }, cars)
  const fastest = _.last(sorted)
  return fastest.name + ' is the fastest'
}
const append = _.flip(_.concat)
const fastestCarRe = _.compose(append(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')))

module.exports = {
  shout,
  last,
  isLastInStock,
  isLastInStockRe,
  nameOfFirstCar,
  averageDollarValue,
  averageDollarValueRe,
  availablePrices,
  availablePricesRe,
  sanitizeNames,
  fastestCar,
  fastestCarRe
}
