// module.exports = 'Hello Node.js module'
//module.exports = {id:1,name:'root'}
// module.exports = [1,2,3,4]

module.exports= (...arg)=>{
    arg.forEach(n=>console.log(n.toUpperCase()))
}