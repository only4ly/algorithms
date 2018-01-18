const assert = require('assert')
const strassen = require('../solutions/strassen')
describe('strassen', function () {
  it('should equal [[18, 14],[64, 66]]', function () {
    assert.equal(strassen([[1, 3], [7, 5]], [[6, 8], [4, 2]]).toString(), [[18, 14], [62, 66]].toString())
  })
  it('should equal [[4, 4, 4, 4],[4, 4, 4, 4],[4, 4, 4, 4],[4, 4, 4, 4]]', function () {
    assert.equal(
      strassen([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]).toString(),
      [[4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4]].toString()
    )
  })
})
