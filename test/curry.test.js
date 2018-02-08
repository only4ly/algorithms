const assert = require('assert')
const curryUtil = require('../functional/curry/test')
const util = require('../sort/util')
const words = curryUtil.words
const wordsCurry = curryUtil.wordsCurry
const wordsArr = curryUtil.wordsArr
const max = curryUtil.max
const maxCurry = curryUtil.maxCurry
const filterQs = curryUtil.filterQs
const filterQsp = curryUtil.filterQsp
const createRandomArray = util.createRandomArray

const createRandomString = (num) => {
  let arr = []
  for (let i = 0; i < num; i++) {
    const a = ' '.charCodeAt() - 1
    const z = 'Z'.charCodeAt()
    arr.push(a + ~~(Math.random() * (z - a)))
  }
  return String.fromCharCode(...arr)
}
describe('test words function', function () {
  it('should equal', function () {
    assert.equal(words('hello world haha').toString(), wordsCurry('hello world haha').toString())
  })
  for (let i = 0; i < 10; i++) {
    it('should equal on random words', function () {
      const s = createRandomString(100)
      assert.equal(words(s).toString(), wordsCurry(s).toString())
    })
  }
})
describe('test wordArr fun', function () {
  it('should equal', function () {
    const s = ['hello word heol', 'hello word heol']
    assert.equal(JSON.stringify(wordsArr(s)), JSON.stringify(s.map(words)))
  })
  for (let i = 0; i < 10; i++) {
    it('should equal on random Arr', function () {
      const randomStrArr = new Array(100).fill(1).map(() => createRandomString(100))
      assert.equal(JSON.stringify(wordsArr(randomStrArr)), JSON.stringify(randomStrArr.map(words)))
    })
  }
})
describe('test maxCurry fun', function () {
  it('should equal', function () {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(max(arr), maxCurry(arr))
  })
  for (let i = 0; i < 10; i++) {
    it('should equal on random Arr', function () {
      const randomArr = createRandomArray(100)
      assert.equal(max(randomArr), maxCurry(randomArr))
    })
  }
})
describe('test filterQsp fun', function () {
  it('should equal', function () {
    const arr = ['quick', 'camels', 'quarry', 'over', 'quails']
    assert.equal(JSON.stringify(filterQs(arr)), JSON.stringify(filterQsp(arr)))
  })
})
