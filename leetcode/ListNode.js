/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = function (val) {
  this.val = val
  this.next = null
}
/**
 * given an single node list, return array
 * @param {ListNode} l the given ListNode
 */
const formatListNode = function (l) {
  const resrr = []
  while (l.val) {
    resrr.push(l.val)
  }
  return resrr
}
/**
 * given an number array, return an listNode
 * @param {Array<number>} arr
 */
const createListNode = function (arr) {
  let l
  const l0 = l = new ListNode(arr[0])
  for (let i = 1; i < arr.length; i++) {
    l.next = new ListNode(arr[i])
    l = l.next
  }
  return l0
}
module.exports = { ListNode, formatListNode, createListNode }
