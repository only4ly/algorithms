const inspect = function (x) {
  return (x && x.inspect) ? x.inspect() : x
}
// Identity 先把值取出来算一遍再放回去呗
const Identity = function (f) {
  this.__value = f
}

// 工厂函数, 为了不使用new关键字
Identity.of = function (x) { return new Identity(x) }
Identity.prototype.map = function (f) {
  return Identity.of(f(this.__value))
}
// Maybe
const Maybe = function (x) {
  this.__value = x
}

Maybe.of = function (x) {
  return new Maybe(x)
}

Maybe.prototype.isNothing = function (f) {
  return (this.__value === null || this.__value === undefined)
}

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}

Maybe.prototype.chain = function (f) {
  return this.map(f).join()
}

Maybe.prototype.ap = function (other) {
  return this.isNothing() ? Maybe.of(null) : other.map(this.__value)
}

Maybe.prototype.join = function () {
  return this.isNothing() ? Maybe.of(null) : this.__value
}

Maybe.prototype.inspect = function () {
  return 'Maybe(' + inspect(this.__value) + ')'
}
const Left = function (x) {
  this.__value = x
}

// TODO: remove this nonsense
Left.of = function (x) {
  return new Left(x)
}

Left.prototype.map = function (f) { return this }
Left.prototype.ap = function (other) { return this }
Left.prototype.join = function () { return this }
Left.prototype.chain = function () { return this }
Left.prototype.inspect = function () {
  return 'Left(' + inspect(this.__value) + ')'
}

const Right = function (x) {
  this.__value = x
}

// TODO: remove in favor of Either.of
Right.of = function (x) {
  return new Right(x)
}

Right.prototype.map = function (f) {
  return Right.of(f(this.__value))
}

Right.prototype.join = function () {
  return this.__value
}

Right.prototype.chain = function (f) {
  return f(this.__value)
}

Right.prototype.ap = function (other) {
  return this.chain(function (f) {
    return other.map(f)
  })
}

Right.prototype.join = function () {
  return this.__value
}

Right.prototype.chain = function (f) {
  return f(this.__value)
}

Right.prototype.inspect = function () {
  return 'Right(' + inspect(this.__value) + ')'
}
module.exports = {
  Identity,
  Maybe,
  Left,
  Right
}
