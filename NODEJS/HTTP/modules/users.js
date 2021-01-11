const fetch = require('node-fetch')

module.exports= async()=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    return data;
}