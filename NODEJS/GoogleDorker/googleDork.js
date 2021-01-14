/*
PROJECT PLAN

google-scraper  ['https://www.npmjs.com/package/google-it']
http ['http']
fs ['fs']
yargs - commandline args parser ['https://www.npmjs.com/package/yargs']

*/

const googleIt = require('google-it')
const http = require('http')
const fs = require('fs')

let argv = require('yargs/yargs')(process.argv.slice(2))
.usage(`
──▄█▀█▄─────────██
▄████████▄───▄▀█▄▄▄▄
██▀▼▼▼▼▼─▄▀──█▄▄
█████▄▲▲▲─▄▄▄▀───▀▄
██████▀▀▀▀─▀────────▀▀
$0 --dork "intitle:Index of mp3" --output [filename.json] --live 1 --port [num]`) // optional 
.demandOption(['dork']) // required
.argv


console.log(argv.dork) // undefined as default
console.log(argv.output) // filename.json

googleIt({'query':argv.dork}).then(results=>{
    console.log(results)
    if(argv.output !=undefined){
        fs.writeFileSync(argv.output,JSON.stringify(results));
    }

    if(argv.live !=undefined){
        http.createServer((req,res)=>{
            res.write(JSON.stringify(results))
            res.end();
        }).listen(Number(argv.port),()=>{
            console.log(`Visit Link for Result: http://localhost:${argv.port}/`)
        })
    }

})