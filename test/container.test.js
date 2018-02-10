const assert = require('assert')
const { ex1, ex2, ex3, ex4, ex4Re, ex5, ex6 } = require('../functional/container/test')
const { Identity, Maybe, Left, Right } = require('../functional/container/utils')

describe('test Exercise 1', function () {
  it('should equal', function () {
    assert.deepEqual(ex1(Identity.of(2)), Identity.of(3))
  })
  it('should work on random num', function () {
    const num = ~~(Math.random() * 1000)
    assert.deepEqual(ex1(Identity.of(num)), Identity.of(num + 1))
  })
})
describe('test Exercise 2', function () {
  const xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
  it('should deepEqual', function () {
    assert.deepEqual(ex2(xs), Identity.of('do'))
  })
})
describe('test Exercise 3', function () {
  it('should deepEqual', function () {
    const user = { name: 'Zhangw', id: 1 }
    assert.deepEqual(ex3(user), Maybe.of('Z'))
  })
  it('should return Maybe null', function () {
    const user = { id: 1 }
    assert.deepEqual(ex3(user), Maybe.of(null))
  })
})
describe('test Exercise 4', function () {
  it('should deepEqual', function () {
    assert.deepEqual(ex4Re('4'), Maybe.of(ex4('4')))
  })
  it('should return Maybe null', function () {
    assert.deepEqual(ex4Re(), Maybe.of(ex4()))
  })
})
describe('test Exercise 5', function () {
  it('should ', function () {
    ex5(1).fork(console.log, (res) => {
      assert.deepEqual(res, 'LOVE THEM FUTURES')
    })
  })
})
describe('test Exercise 6', function () {
  it('Exercise 6', function () {
    assert.deepEqual(Left.of('Your account is not active'), ex6({ active: false, name: 'Gary' }))
    assert.deepEqual(Right.of('Welcome Theresa'), ex6({ active: true, name: 'Theresa' }))
  })
})
