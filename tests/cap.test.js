const capitalize = require('../cap')

test('Capitalize Everyword', () => {
   expect(capitalize('hello world and everyone')).toEqual('Hello World And Everyone')
})