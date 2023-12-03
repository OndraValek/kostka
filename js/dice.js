const dice = document.getElementById('dice');
const result = document.getElementById('result');
const play = document.getElementById('play');

let roll = 0;               // aktuální hod
let rolls = [];             // pole všech hodů
let timer = false;
let max = 1, min = 6;

play.addEventListener('click', function(){
    if(!timer){
        timer = setInterval(function(){
            roll = Math.ceil(Math.random() * 6);
            dice.src = `img/kostka${roll}.png`;
        },40)
        play.innerText = 'Stop'
    }else {
        clearInterval(timer);
        rolls.push(roll);
        if (max < roll)  max = roll;
        if (min > roll)  min = roll;
        result.innerHTML = stats();
        timer = false;
        play.innerText = 'Play'

    }
});

function sum() {
    let s = 0;
    for(let i = 0; i < rolls.length;i++){
        s += rolls[i];
    }
    return s;
}

function stats(){
    let result = '';
    result += `Aktuální hod: ${roll}<br>`;
    result += `Archiv hodů: ${rolls}<br>`;
    result += `Počet hodů: ${rolls.length}<br>`;
    result += `Součet hodů: ${sum()}<br>`;
    result += `Průměr hodů: ${(sum() / rolls.length).toFixed(1)}<br>`;
    result += `Nejvyšší hod: ${max}<br>`;
    result += `Nejnižší hod: ${min}<br>`;
    return result;
}