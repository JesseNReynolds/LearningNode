const names = require('./names')
const sayHi = require('./utils')
const data = require('./another-way')
require('./addValues.js')

console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
