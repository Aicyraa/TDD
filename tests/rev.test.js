const reverse = require('../rev')

test('Reverse Words', () => {
   expect(reverse('hello')).toBe('olleh')
})