var player = document.querySelector('#player')

var i=0;

function WalkWalk(){
    i += 5
    if(i<500){
        // i > 5/10/15/20/25/ 500
        player.style.left=`${i}px`
    }else{
        i=0;
        i+=5;
    }


    setTimeout(WalkWalk,100)

}



setTimeout(function(){
    console.log('Bazinga!')
},5000)

WalkWalk();
//player.style.left="500px"