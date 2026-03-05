const calculate = {
   add: (a, b) => a + b,
   subtract: (a, b) => a < b ? b - a : a - b,
   multiply: (a, b) => a * b,
   divide: (a, b) => a / b,
};

module.exports = calculate