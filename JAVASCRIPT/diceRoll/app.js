let button = document.getElementById('diceRollerbutton');
const diceOne = document.getElementById('placeholder1');
const diceTwo = document.getElementById('placeholder2');
let textPlayer = document.getElementById('textPlayer');

// function changeDice

function changeDice(){
    const firstRandomDice = Math.floor(Math.random() * 6) + 1;
    const secondRandomDice = Math.floor(Math.random() * 6) + 1;
    diceOne.innerHTML = `<img src="https://raw.githubusercontent.com/MikailMilissen/Webdev2/master/Javascript/Tutorial%2016/Oefening%201%20Dice%20Roll/assets/dice${firstRandomDice}.png" style="height: 100px; width: 100px;">`;
    diceTwo.innerHTML = `<img src="https://raw.githubusercontent.com/MikailMilissen/Webdev2/master/Javascript/Tutorial%2016/Oefening%201%20Dice%20Roll/assets/dice${secondRandomDice}.png" style="height: 100px; width: 100px;">`;
    if (firstRandomDice > secondRandomDice){
        textPlayer.innerText = `First Player Wins`;
    } else {
        textPlayer.innerText = `Second Player Wins`;
    }
}

button.addEventListener('click',changeDice)