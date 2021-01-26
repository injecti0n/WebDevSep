const api = "https://jsonplaceholder.typicode.com/posts"
const city = 'Gwenborough'
const jumbo = document.querySelector('.jumbotron')
const modalbody = document.querySelector('.modal-body')
const modaltitle = document.querySelector('.modal-title')
// fetch(api)
// // converted data into json format
// .then(intec=>intec.json())
// .then(data=>data.filter((e)=>{
//     // extracted the specific data by cityname
//     return e.address.city == city
// }))
// .then(lastupdated=>{
//     // here we have last filtered data. Ready to print
//     console.log(lastupdated)
// })

const c = (t)=>document.createElement(t);

function linkGen(obj){
    let a = c('a');
    a.href="#"
    a.className="lead d-block"
    a.id="post"
    a.setAttribute('data-toggle','modal')
    a.setAttribute('key',obj.id)
    a.setAttribute('data-target','#exampleModalLong')
    a.innerText=obj.title
    jumbo.appendChild(a)
    
}


window.addEventListener('DOMContentLoaded', (event) => {
    fetch(api)
        // converted data into json format
        .then(intec => intec.json())
        .then(data => {
            data.forEach(post => {
                linkGen(post)
            })
        })
});

async function getSingle(id){
    let res = await fetch(`${api}/${id}`)
    let post = await res.json();
    return post
}


jumbo.addEventListener('click',(e)=>{
    if(e.target.id=="post"){
        console.log("Posttttt!")
        if(isNaN(e.target.getAttribute("key"))){
            console.log('numara degil')
        }else{
            console.log('numara')
            getSingle(e.target.getAttribute('key')).then(res=>{
                console.log(res)
                modaltitle.innerHTML=res.title
                modalbody.innerHTML=res.body
            })

        }
        
    }
})


/*

retrieve data from users api endpoint

parse response data as json format

filter this data by city 'McKenziehaven'

and then print data in the last method

*/