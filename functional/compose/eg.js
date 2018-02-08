// 代码组合（compose）
const compose = (f, g) => (x) => f(g(x))
const exclaim = (x) => `${x}!`
const toUpperCase = (x) => x.toUpperCase()
const shout = compose(exclaim, toUpperCase)
const head = x => x[0]
// revesre 居然不是纯函数 惊呆了
const reverse = x => Object.assign([], x).reverse()
const last = compose(head, reverse)
module.exports = {
  shout,
  last
}
