const caesarCipher = require('../cc')

describe('CC', () => {
   test('check', () => {
      expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc')  
   })

   test('Check Shifting', () => {
      expect(caesarCipher('axyz', 3)).toBe('dabc')
   })

   test('Non-Character', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
   })
   
   test('Case Sensitive', () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
   })
})