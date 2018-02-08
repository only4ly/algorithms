var lengthOfLongestSubstring = function (s) {
  if (s === '') {
    return 0
  }
}
var isRepeat = function (s) {
  var arr = s.split('')
  return arr.length !== new Set(arr).size
}
module.exports = lengthOfLongestSubstring
