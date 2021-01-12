const fs = require('fs')

let fileName = process.argv[2]
let message = process.argv[3]

// console.log(process.argv)
// console.log(process.argv[0])
// console.log(process.argv[1])
// console.log(process.argv[2])

console.log(typeof process.argv)
console.log('FileName!!!', fileName)
console.log(message)

fs.writeFile(fileName,message,()=>{
    
})