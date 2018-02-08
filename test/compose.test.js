const assert = require('assert')
const eg = require('../functional/compose/eg')
const createRandomLowerString = (num) => {
  let arr = []
  for (let i = 0; i < num; i++) {
    const a = 'a'.charCodeAt()
    const z = 'z'.charCodeAt()
    arr.push(a + ~~(Math.random() * (z - a)))
  }
  return String.fromCharCode(...arr)
}
describe('test shout', function () {
  it('should return ABC!', function () {
    assert.equal(eg.shout('abc'), 'ABC!')
  })
  for (let i = 0; i < 10; i++) {
    it('should work on random string', function () {
      const s = createRandomLowerString(~~(Math.random() * 1000))
      assert.equal(eg.shout(s), `${s.toUpperCase()}!`)
    })
  }
})
describe('test last', function () {
  it('should work on simple test', function () {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(eg.last(arr), arr[arr.length - 1])
  })
})
