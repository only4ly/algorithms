/**
 * create an ListNode
 * @param {Number} val value of listNode (0~9)
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var val1 = format(l1)
  var val2 = format(l2)
  // console.log(val1 + ' | ' + val2)
  var res = val1 + val2
  // console.log(res)
  var resNode = unformat(res)
  return resNode
}
/**
* @param {ListNode} l
*/
var format = function (l) {
  var arr = []
  while (l.next) {
    arr.push(l.val)
    l = l.next
  }
  arr.push(l.val)
  arr = arr.reverse()
  return parseInt(arr.join(''))
}
var unformat = function (val) {
  var arr = (val + '').split('').reverse()
  var l0, l
  l0 = l = new ListNode(parseInt(arr[0]))
  for (var i = 0; i < arr.length - 1; i++) {
    l.next = new ListNode(parseInt(arr[i + 1]))
    l = l.next
  }
  return l0
}
// 这种解法在链表长度超长的时候无法工作, toString的时候会被转成指数形式
export default addTwoNumbers
