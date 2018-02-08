const ListNode = require('./ListNode').ListNode
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l, l0, step
  const stepVal = stepAdd(l1.val, l2.val, false)
  step = stepVal.isOver
  l0 = l = new ListNode(stepVal.val)
  while (l1.next && l2.next) {
    l1 = l1.next
    l2 = l2.next
    let stepv = stepAdd(l1.val, l2.val, step)
    step = stepv.isOver
    l.next = new ListNode(stepv.val)
    l = l.next
  }
  if (l1.next || l2.next) {
    let l3 = l1.next ? l1 : l2
    while (l3.next) {
      l3 = l3.next
      let stepv1 = stepAdd(0, l3.val, step)
      step = stepv1.isOver
      l.next = new ListNode(stepv1.val)
      l = l.next
    }
  }
  if (step) {
    l.next = new ListNode(1)
  }
  return l0
}
const stepAdd = function (val1, val2, isOver) {
  const val = val1 + val2 + isOver
  return {
    isOver: val > 9,
    val: val > 9 ? val - 10 : val
  }
}
module.exports = addTwoNumbers
