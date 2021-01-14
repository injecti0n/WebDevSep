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
            //res.write(JSON.stringify(results))
            res.write(`
            <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
            <div class="jumbotron">

          
            ${results.map(result=>(
                result.link+"<br>"
            ))}
            


            </div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    -->
  </body>
</html>
            
            `)
            res.end();
        }).listen(Number(argv.port),()=>{
            console.log(`Visit Link for Result: http://localhost:${argv.port}/`)
        })
    }

})


/*

PORT RANGE

0 - 65535
80 21 22 25 443 445

*/