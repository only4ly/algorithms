const assert = require('assert')
const quicksort = require('../sort/quicksort/quicksort')
const util = require('../sort/util')
const isSorted = util.isSorted
const createRandomArray = util.createRandomArray

describe('quicksort will return an sorted array', function () {
  it('should work on base array', function () {
    assert.equal(isSorted(quicksort([2, 3, 4, 1, 0, 10, 9])), true)
  })
  for (let i = 0; i < 100; i++) {
    it('should work on random array', function () {
      assert.equal(isSorted(quicksort(createRandomArray())), true)
    })
  }
})