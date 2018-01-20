const assert = require('assert')
const heapSort = require('../sort/heapsort/heapSort')
const isSorted = require('../sort/util').isSorted

describe('isSorted is a function to judge an array is sorted', function() {
  it('should reutrn true', function () {
    assert.equal(isSorted([1, 2, 3]), true)
  })
  it('should reutrn true', function () {
    assert.equal(isSorted([3, 2, 1], true), true)
  })
})
describe('heapSort will return an sorted array', function() {
  it('should reutrn true', function () {
    assert.equal(isSorted(heapSort([1, 2, 3]), true), true)
  })
})
