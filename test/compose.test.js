const assert = require('assert')
const {
  shout,
  last,
  isLastInStockRe,
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  averageDollarValueRe,
  availablePrices,
  availablePricesRe,
  sanitizeNames,
  fastestCar,
  fastestCarRe
} = require('../functional/compose/test')
// 示例数据
const CARS = [
  { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
  { name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
  { name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
  { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
  { name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
  { name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false }
]

const createRandomLowerString = (num) => {
  let arr = []
  for (let i = 0; i < num; i++) {
    const a = 'a'.charCodeAt()
    const z = 'z'.charCodeAt()
    arr.push(a + ~~(Math.random() * (z - a)))
  }
  return String.fromCharCode(...arr)
}
describe('test shout', function () {
  it('should return ABC!', function () {
    assert.equal(shout('abc'), 'ABC!')
  })
  for (let i = 0; i < 10; i++) {
    it('should work on random string', function () {
      const s = createRandomLowerString(~~(Math.random() * 1000))
      assert.equal(shout(s), `${s.toUpperCase()}!`)
    })
  }
})
describe('test last', function () {
  it('should work on simple test', function () {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(last(arr), arr[arr.length - 1])
  })
})
describe('test isLastInStock', function () {
  it('should equal', function () {
    assert.equal(isLastInStock(CARS), isLastInStockRe(CARS))
  })
})
describe('test nameOfFirstCar', function () {
  it('should equal', function () {
    assert.equal(nameOfFirstCar(CARS), CARS[0].name)
  })
})
describe('test averageDollarValue', function () {
  it('should equal', function () {
    assert.equal(averageDollarValue(CARS), averageDollarValueRe(CARS))
  })
})
describe('test availablePrices', function () {
  it('should equal', function () {
    assert.equal(availablePrices(CARS), availablePricesRe(CARS))
  })
})
describe('test sanitizeNames', function () {
  it('should deepEqual', function () {
    const ans = ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']
    assert.deepEqual(sanitizeNames(CARS), ans)
  })
})
describe('test fastCar', function () {
  it('should equal', function () {
    assert.equal(fastestCar(CARS), fastestCarRe(CARS))
  })
})
