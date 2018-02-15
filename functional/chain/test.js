const _ = require('ramda')
const { Maybe, IO, Right, Left } = require('../container/utils')
const Task = require('data.task')

// 练习 1
// ==========
// 给定一个 user，使用 safeProp 和 map/join 或 chain 安全地获取 sreet 的 name

const safeProp = _.curry(function (x, o) { return Maybe.of(o[x]) })
const user = {
  id: 2,
  name: 'albert',
  address: {
    street: {
      number: 22,
      name: 'Walnut St'
    }
  }
}
const ex1 = _.compose(_.chain(safeProp('name')), _.chain(safeProp('street')), safeProp('address'))
console.log(ex1(user))

// 练习 3
// ==========
// 使用 getPost() 然后以 post 的 id 调用 getComments()
const getPost = function (i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res({ id: i, title: 'Love them tasks' })
    }, 300)
  })
}

const getComments = function (i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res([
        { post_id: i, body: 'This book should be illegal' },
        { post_id: i, body: 'Monads are like smelly shallots' }
      ])
    }, 300)
  })
}

const ex3 = _.compose(_.chain(getComments), getPost)

// 练习 4
// ==========
// 用 validateEmail、addToMailingList 和 emailBlast 实现 ex4 的类型签名

//  addToMailingList :: Email -> IO([Email])
const addToMailingList = (function (list) {
  return function (email) {
    return new IO(function () {
      list.push(email)
      return list
    })
  }
})([])

const emailBlast = function (list) {
  return new IO(function () {
    return 'emailed: ' + list.join(',')
  })
}

const validateEmail = function (x) {
  return x.match(/\S+@\S+\.\S+/) ? (new Right(x)) : (new Left('invalid email'))
}

//  ex4 :: Email -> Either String (IO String)
const ex4 = _.compose(_.map(_.compose(_.chain(emailBlast), addToMailingList)), validateEmail)

module.exports = { ex1, ex3, ex4 }
