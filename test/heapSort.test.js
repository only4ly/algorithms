const assert = require('assert')
const heapSort = require('../sort/heapsort/heapSort')
const isSorted = require('../sort/util').isSorted
const createRandomArray = require('../sort/util').createRandomArray

describe('isSorted is a function to judge an array is sorted', function() {
  it('should reutrn true', function () {
    assert.equal(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true)
  })
  it('should reutrn true', function () {
    assert.equal(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse(), true), true)
  })
})
describe('heapSort will return an sorted array', function() {
  it('should work on simple array', function () {
    assert.equal(isSorted(heapSort([1, 2, 3]), true), true)
  })
  for (let i = 0; i < 100; i++) {
    it('should work on random array', function () {
      assert.equal(isSorted(heapSort(createRandomArray()), true), true)
    })
  }
})
