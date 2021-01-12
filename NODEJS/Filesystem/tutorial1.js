const fs = require('fs')
const readline = require('readline');

// // READ FILE
// fs.readFile('./readme.txt','utf8',(err,content)=>{
//     console.log(content)
// })

// // APPENDFile
// fs.appendFile('./readme.txt','This is new line',(err)=>{
//     console.log('Data saved!')
// })

// // WriteFile
// fs.writeFile('./readme.txt','NEW DATA! Message',(err)=>{
//    // if(err) throw err;
//     console.log('File created!')
// })

// // unlink method - delete
// // fs.unlink('./readme.txt',()=>{
// //     console.log('Deleted!')
// // })

// // Rename a file
// fs.rename('./readme.txt','./helloworld.txt',()=>{
//     console.log('filename has been renamed.')
// })


const readInterface = readline.createInterface({
    input:fs.createReadStream('./combolist.txt')
});

readInterface.on('line',(line)=>{
 //   console.log(line,'This is line')
    let extracted = line.split(":")[0]
    console.log(extracted)
    fs.appendFile('./extractedData.txt',`${extracted}\n`,(err)=>{
        if(err) return console.log(err);
        console.log('Users List Extracted!')
    })
})
