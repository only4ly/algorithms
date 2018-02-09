const _ = require('ramda')
const reduce = _.curry((f, a, xs) => xs.reduce(f, a))
const map = _.curry((f, arr) => arr.map(f))
const add = _.curry((x, y) => x + y)
const replace = _.curry((what, replacement, x) => x.replace(what, replacement))
module.exports = {
  reduce,
  map,
  add,
  replace
}
