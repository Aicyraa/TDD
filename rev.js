function reverse(string) {
   const arr = []
   string.split('').forEach(c => arr.unshift(c));
   return arr.join('')
}

module.exports = reverse