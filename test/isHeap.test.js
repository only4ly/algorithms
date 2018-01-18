const assert = require('assert')
const isHeap = require('../heapsort/isHeap')

describe('isHeap is fun to judge an array is an maxHeap', function () {
  it('shou return true', function () {
    assert.equal(isHeap([3, 2, 1]), true)
  })
  it('shou return true', function () {
    assert.equal(isHeap([3, 2]), true)
  })
})