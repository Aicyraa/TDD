const calculate = require('../cal')

describe('add, subtract, multiply, divide property', () => {
   test('add', () => {
      expect(calculate.add(1,2)).toBe(3)
   })
   test('sub', () => {
      expect(calculate.subtract(1,2)).toBe(1)
   })
   test('multiply', () => {
      expect(calculate.multiply(1,2)).toBe(2)
   })
   test('divide', () => {
      expect(calculate.divide(1,2)).toBe(0.5)
   })
})