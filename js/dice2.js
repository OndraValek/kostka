const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const result = document.getElementById('result');
const rollDice1 = document.getElementById('rollDice1');
const rollDice2 = document.getElementById('rollDice2');

let roll1 = 0;               // aktuální hod na první kostce
let roll2 = 0;               // aktuální hod na druhé kostce
let rolls1 = [];             // pole všech hodů na první kostce
let rolls2 = [];             // pole všech hodů na druhé kostce
let max1 = 1, min1 = 6;      // pro první kostku
let max2 = 1, min2 = 6;      // pro druhou kostku

rollDice1.addEventListener('click', function(){
    roll1 = Math.ceil(Math.random() * 6);
    dice1.src = `img/kostka${roll1}.png`;
    rolls1.push(roll1);
    if (max1 < roll1)  max1 = roll1;
    if (min1 > roll1)  min1 = roll1;
    checkWinner();
});

rollDice2.addEventListener('click', function(){
    roll2 = Math.ceil(Math.random() * 6);
    dice2.src = `img/kostka${roll2}.png`;
    rolls2.push(roll2);
    if (max2 < roll2)  max2 = roll2;
    if (min2 > roll2)  min2 = roll2;
    checkWinner();
});

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function checkWinner() {
    let winnerMessage = '';

    if (roll1 > roll2) {
        winnerMessage = 'Kostka 1 vyhrála!';
    } else if (roll1 < roll2) {
        winnerMessage = 'Kostka 2 vyhrála!';
    } else {
        winnerMessage = 'Házejte znovu, stejná čísla!';
    }

    result.innerHTML = stats() + `<br>${winnerMessage}`;
}

function stats(){
    let resultStr = '';
    resultStr += `Aktuální hod na kostce 1: ${roll1}<br>`;
    
    resultStr += `Aktuální hod na kostce 2: ${roll2}<br>`;
   
    return resultStr;
}
