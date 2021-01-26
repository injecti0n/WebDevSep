const fs = require('fs')
const youtubedl = require('youtube-dl')

const video = youtubedl('https://www.youtube.com/watch?v=SpeNcnSknRo',['--format=18'],{ cwd: __dirname })

video.on('info',function(info){
    console.log(info)
})