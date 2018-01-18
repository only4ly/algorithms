const isHeap = function (arr) {
  if (!Array.isArray(arr))
    throw new Error('must be array')
  if (!arr.every(item => typeof item === 'number'))
    throw new Error('must be number array')
  const deep = ~~Math.log2(arr.length)
  const full = Math.pow(2, deep + 1) - 1
  const last = full - arr.length
  console.log('deep', deep)
  console.log('full', full)
  const lastArr = []
  lastArr.length = last
  lastArr.fill(-Infinity)
  const fullArr = arr.concat(lastArr)
  console.log('fullArr', fullArr)
  const end = Math.pow(2, deep) - 1
  return fullArr.every((item, index) => {
    return (item >= fullArr[(index+1)*2 -1] && item >= fullArr[(index+1)*2 -1]) || index >= end
  })
}
module.exports = isHeap