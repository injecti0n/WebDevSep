// selectors

var imgArea = document.querySelector('.imgarea')
var button = document.querySelector('button.btn.btn-primary')
var img = document.querySelector('img')


// html-tag generator
function g(t){
    return document.createElement(t)
}



var img1= g('img');
img1.src="https://loremflickr.com/g/320/240/paris,girl/all"
img1.setAttribute('name',1)
img1.className="img-responsive"

var img2= g('img');
img2.src="https://loremflickr.com/320/240/dog"
img2.setAttribute('name',2)
img2.className="img-responsive"
var logic = false;

button.addEventListener('click',function(event){
    event.preventDefault();
    var currentImg = document.querySelector('img.img-responsive')
   if(!logic){
       logic=true
       console.log('1')
       imgArea.replaceChild(img2,currentImg)
   }else{
       logic=false
       imgArea.replaceChild(img1,currentImg)
       console.log('2')
   }
    console.log('test')
})


console.log(img1,img2)