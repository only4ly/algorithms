const assert = require('assert')
const isMaxHeap = require('../sort/heapsort/isMaxHeap')
const createMaxHeap = require('../sort/heapsort/buildMaxHeap')

const createRandomArray = function () {
  const randomArray = []
  for (let i = 0; i < 1000; i++) {
    randomArray.push(~~(Math.random() * 10000))
  }
  return randomArray
}
describe('createMaxHeap is function to let an unsort array to be an maxHeap', function () {
  it('should work on simple array', function () {
    assert.equal(isMaxHeap(createMaxHeap([1, 2, 3, 4, 5])), true)
  })
  it('should work on simple array', function () {
    assert.equal(isMaxHeap(createMaxHeap([1, 2, 3, 5, 6, 6, 7, 90, 0, 12])), true)
  })
  it('should work on simple array', function () {
    assert.equal(isMaxHeap(createMaxHeap([1, 2, 3, 0, 0, 0, 0, 0, 99, 9, 20])), true)
  })
  it('should work on simple array', function () {
    assert.equal(isMaxHeap(createMaxHeap([1, 2, 3, 0, 0, 0, 0, 0, 99, 9, 20])), true)
  })
  for (let i = 0; i < 10; i++) {
    it('should work on random array', function () {
      assert.equal(isMaxHeap(createMaxHeap(createRandomArray())), true)
    })
  }
})
