const _ = require('ramda')
const Task = require('data.task')
const { Maybe, Right, Left } = require('./utils')
// 练习 1
// ==========
// 使用 _.add(x,y) 和 _.map(f,x) 创建一个能让 functor 里的值增加的函数
const ex1 = _.map(_.add(1))

// 练习 2
// ==========
// 使用 _.head 获取列表的第一个元素
// const xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
const ex2 = _.map(_.head)

// 练习 3
// ==========
// 使用 safeProp 和 _.head 找到 user 的名字的首字母
// const user = { id: 2, name: 'Albert' }
// const userWrong = {id: 3}
const safeProp = _.curry((x, o) => Maybe.of(o[x]))
const ex3 = _.compose(_.map(_.head), safeProp('name'))

// 练习 4
// ==========
// 使用 Maybe 重写 ex4，不要有 if 语句
const ex4 = function (n) {
  if (n) { return parseInt(n) }
}
const ex4Re = _.compose(_.map(parseInt), Maybe.of)

// 练习 5
// ==========
// 写一个函数，先 getPost 获取一篇文章，然后 toUpperCase 让这片文章标题变为大写

// getPost :: Int -> Future({id: Int, title: String})
const getPost = function (i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res({ id: i, title: 'Love them futures' })
    }, 3000)
  })
}
const ex5 = _.compose(_.map(res => res), getPost)

// 练习 6
// ==========
// 写一个函数，使用 checkActive() 和 showWelcome() 分别允许访问或返回错误
const add = _.curry((x, y) => x + y)
const showWelcome = _.compose(add('Welcome '), _.prop('name'))
const checkActive = function (user) {
  return user.active ? Right.of(user) : Left.of('Your account is not active')
}
const ex6 = _.compose(_.map(showWelcome), checkActive)

module.exports = {
  ex1,
  ex2,
  ex3,
  ex4,
  ex4Re,
  ex5,
  ex6
}
