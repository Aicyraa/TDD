function analyze(arr){
   return {
      average: arr.reduce((a, current) => a + current, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length
   }
}

module.exports = analyze