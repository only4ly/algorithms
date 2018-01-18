const assert = require('assert')
const isMaxHeap = require('../heapsort/isMaxHeap')

describe('isMaxHeap is function to judge an array is an maxHeap or not', function () {
  it('shou return true', function () {
    assert.equal(isMaxHeap([3, 2, 1]), true)
  })
  it('shou return true', function () {
    assert.equal(isMaxHeap([3, 2]), true)
  })
})