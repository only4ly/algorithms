const assert = require('assert')
const quicksort = require('../sort/quicksort/quicksort')
const simpleQuicksort = require('../sort/quicksort/simpleQuicksort')
const util = require('../sort/util')
const isSorted = util.isSorted
const createRandomArray = util.createRandomArray

describe('quicksort will return an sorted array', function () {
  it('quicksort should work on base array', function () {
    assert.equal(isSorted(quicksort([2, 3, 4, 1, 0, 10, 9])), true)
  })
  it('simpleQuicksort should work on base array', function () {
    assert.equal(isSorted(simpleQuicksort([2, 3, 4, 1, 0, 10, 9])), true)
  })
  for (let i = 0; i < 10; i++) {
    it('quicksort should work on random array', function () {
      assert.equal(isSorted(quicksort(createRandomArray())), true)
    })
    it('simpleQuicksort should work on random array', function () {
      assert.equal(isSorted(simpleQuicksort(createRandomArray())), true)
    })
  }
})