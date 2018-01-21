const assert = require('assert')
const util = require('../sort/util')
const bubbleSort = require('../sort/bubbleSort')

describe('bubble will return an sorted array', function () {
  it('should work on simple array', function () {
    assert.equal(util.isSorted(bubbleSort([1, 3, 2, 4, 0])), true)
  })
  for (let i = 0; i < 10; i++) {
    it('should work on random array', function () {
      assert.equal(util.isSorted(bubbleSort(util.createRandomArray())), true)
    })
  }
})
