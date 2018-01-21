const assert = require('assert')
const util = require('../sort/util')
const SelectionSort = require('../sort/SelectionSort')

describe('bubble will return an sorted array', function () {
  it('should work on simple array', function () {
    assert.equal(util.isSorted(SelectionSort([1, 3, 2, 4, 0])), true)
  })
  for (let i = 0; i < 10; i++) {
    it('should work on random array', function () {
      assert.equal(util.isSorted(SelectionSort(util.createRandomArray())), true)
    })
  }
})
