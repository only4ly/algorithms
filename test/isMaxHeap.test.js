const assert = require('assert')
const isMaxHeap = require('../heapsort/isMaxHeap')

describe('isMaxHeap is function to judge an array is an maxHeap or not', function () {
  it('shou return true', function () {
    assert.equal(isMaxHeap([3, 2, 1]), true)
  })
  it('shou return true', function () {
    assert.equal(isMaxHeap([3, 2]), true)
  })
  it('shou return false', function () {
    assert.equal(isMaxHeap([2, 3, 1]), false)
  })
  it('shou return false', function () {
    assert.equal(isMaxHeap([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0]), false)
  })
  it('shou return true', function () {
    assert.equal(isMaxHeap([27, 17, 10, 16, 13, 9, 1, 5, 7, 12, 4, 8, 3, 0]), true)
  })
})
