const _ = require('ramda')
const reduce = _.curry((f, a, xs) => xs.reduce(f, a))
const map = _.curry((f, arr) => arr.map(f))
const add = _.curry((x, y) => x + y)
const head = _.curry((x) => x[0])
const last = _.curry((x) => x[x.length - 1])
const replace = _.curry((what, replacement, x) => x.replace(what, replacement))
const split = _.curry((s, str) => str.split(s))
const filter = _.curry((f, arr) => arr.filter(f))
const eq = _.curry((x, y) => x === y)
module.exports = {
  reduce,
  map,
  add,
  replace,
  head,
  last,
  split,
  filter,
  eq
}
