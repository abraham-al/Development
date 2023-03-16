let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let cardEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');

let player = {
    name: 'Abraham',
    chips: 145
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function randomIntFromInterval() { // min and max included 
    let randNumber = Math.floor(Math.random() *13) + 1;

    if (randNumber > 10) {
        return 10;
    }else if (randNumber === 1){
        return 11;
    }else {
        return randNumber;
    }
  }

// console.log(firstCard);
// console.log(secondCard);
// console.log(sum);
function startGame(){
    isAlive = true;
    let firstCard = randomIntFromInterval();
    let secondCard = randomIntFromInterval();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent ="Sum: " + sum;

    if(sum < 21){
        message ='Do u want darw a new card?';
        isAlive = true;
    }else if (sum === 21){
        hasBlackJack = true;
        message = "You Win";
    }else if( sum > 21 ){
        isAlive = false;
        message ='Game Over';
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let dynamicCard = randomIntFromInterval();
        sum += dynamicCard;
        cards.push(dynamicCard);
        renderGame();
    }

}