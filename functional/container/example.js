const _ = require('ramda')
const { map, head, last, split, filter, eq } = require('../util')
var Maybe = function (x) {
  this.__value = x
}

Maybe.of = function (x) {
  return new Maybe(x)
}

Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined)
}

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}
var IO = function (f) {
  this.__value = f
}

IO.of = function (x) {
  return new IO(function () {
    return x
  })
}

IO.prototype.map = function (f) {
  return new IO(_.compose(f, this.__value))
}
var url = new IO(function () { return 'https://www.baidu.com?searchTerm=1&hahahha=2&searchTerm=100' })

//  toPairs =  String -> [[String]]
var toPairs = _.compose(map(split('=')), split('&'))

//   params :: String -> [[String]]
var params = _.compose(toPairs, last, split('?'))

//  findParam :: String -> IO Maybe [String]
var findParam = function (key) {
  return map(_.compose(Maybe.of, filter(_.compose(eq(key), head)), params), url)
}
// 非纯调用代码: main.js //

// 调用 __value() 来运行它！
var s = findParam('searchTerm').__value()
console.log(JSON.stringify(s))
