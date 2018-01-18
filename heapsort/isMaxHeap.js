const isMaxHeap = function (arr) {
  if (!Array.isArray(arr))
    throw new Error('must be array')
  if (!arr.every(item => typeof item === 'number'))
    throw new Error('must be number array')
  // create an Complete Binary Tree
  const deep = ~~Math.log2(arr.length)
  const full = Math.pow(2, deep + 1) - 1
  const last = full - arr.length
  const lastArr = new Array(full - arr.length).fill(-Infinity)
  const fullArr = arr.concat(lastArr)
  // index of last Root Node + 1
  const lastRoot = Math.pow(2, deep) - 1

  return fullArr.every((item, index) => {
    return (item >= fullArr[(index + 1) * 2 - 1] && item >= fullArr[(index + 1)*2 - 1]) || index >= lastRoot
  })
}
module.exports = isMaxHeap