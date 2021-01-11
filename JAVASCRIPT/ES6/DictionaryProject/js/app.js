const searchInput = document.querySelector('#search')
const searchBtn = document.querySelector('.btn-default')
const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const jumbo = document.querySelector('.jumbotronx')
let currentobj = {}
const wordText = document.querySelector('.word-text')
const pronunciation = document.querySelector('.pronunciation-text')
const definition = document.querySelector('.definition')
const play = document.querySelector('#play-pause-button')
async function getWord(word) {
    let response = await fetch(`${api}/${word}`)
    let data = await response.json();
    return data;
}






searchBtn.addEventListener('click',(e)=>{
    getWord(searchInput.value)
    .then(res => {
        let obj = res[0]
      //  console.log(obj)
        currentobj=obj
   
        // <audio controls>
        //               <source src="${obj.phonetics[0].audio}" type="audio/mpeg"></source>  
        //                 Your browser does not support the audio element.
        //                 </audio>
        wordText.innerHTML=obj.word
        pronunciation.innerHTML= obj.phonetics[0].text
        definition.innerHTML=`
        <i>noun</i><br>
                                ${obj.meanings[1].definitions[0].definition}
                                <hr>
                                Example;<br> 
                                ${obj.meanings[1].definitions[0].example}
                                <br>
        `
    //     jumbo.innerHTML = `
    // <div class="row bg-warning">
    //                 <div class="col-sm-10 offset-sm-1 ui-box">
    //                     <h3 class="word-text">${obj.word}</h3>
    //                     <span class="pronunciation-text d-block mb-1" style="color: #808080;">${obj.phonetics[0].text}</span>
                        
    //                     <a id="play-pause-button" class="fa fa-play"></a>
    //                     <div id="definitions-container">
    //                         <div class="row" style="border-top: solid 1px #e6e6e6; padding: 10px 0">
    //                             <div class="col-sm-9 my-auto"><i>noun</i><br>
    //                             ${obj.meanings[1].definitions[0].definition}
    //                             <hr>
    //                             Example;<br> 
    //                             ${obj.meanings[1].definitions[0].example}
    //                             <br></div>
                                
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    // `
    })
})


play.addEventListener('click',(e)=>{
    var audio = new Audio(currentobj.phonetics[0].audio);
    console.log(currentobj)
    let toggle = (e.target.className === "fa fa-play");
    console.log(toggle)
    if(toggle==true){
        e.target.className="fa fa-pause"
        audio.play();
    }else{
        e.target.className="fa fa-play"
        audio.pause();
    }

    audio.onended = function(){
        play.className="fa fa-play"
    }

})