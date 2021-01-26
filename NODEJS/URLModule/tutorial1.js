const url = require('url')

let result = url.parse('http://localhost:8080/default.htm?year=2017&month=february')
console.log(result)
console.log(result.query)