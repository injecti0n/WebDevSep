const myModule = require('./myModules/intecbrussel')
const getAllUsers  = require('./myModules/getUsers')
const getSingle = require('./myModules/getSingleUser')
console.log('test')
//console.log(myModule)

myModule('mikail','Emmanuel','Lotte','Susan')
//getAllUsers().then(res=>console.log(res))
getSingle(5).then(res=>console.log(res))


