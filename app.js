

var firstPlayer = true

var box1_1 = document.getElementById('box1-1')
var box1_2 = document.getElementById('box1-2')
var box1_3 = document.getElementById('box1-3')

var box2_1 = document.getElementById('box2-1')
var box2_2 = document.getElementById('box2-2')
var box2_3 = document.getElementById('box2-3')

var box3_1 = document.getElementById('box3-1')
var box3_2 = document.getElementById('box3-2')
var box3_3 = document.getElementById('box3-3')


var allBoxes = [box1_1, box1_2, box1_3, box2_1, box2_2, box2_3, box3_1, box3_2, box3_3]

init();

allBoxes.map(function(box) {

    box.addEventListener('click', (event) => {changeLetter(box)})

});


function togglePlayer() {

    if (firstPlayer === true) {
        firstPlayer = false;
    } else {
        firstPlayer = true;
    }
}


function changeLetter(box) {

    if (firstPlayer === true) {

        box.classList.toggle('blue');

        box.innerHTML = 'x'

    } else {
        
        box.classList.toggle('red');

        box.innerHTML = 'o'
    }

    document.querySelector('span.player1').classList.toggle('active');
    document.querySelector('span.player2').classList.toggle('active');

    checkWin();
    togglePlayer();

};

var rowWin1 = [box1_1, box1_2, box1_3]
var rowWin2 = [box2_1, box2_2, box2_3]
var rowWin3 = [box3_1, box3_2, box3_3]

var colWin1 = [box1_1, box2_1, box3_1]
var colWin2 = [box1_2, box2_2, box3_2]
var colWin3 = [box1_3, box2_3, box3_3]

var diagWin1 = [box1_1, box2_2, box3_3]
var diagWin2 = [box1_3, box2_2, box3_1]

var allWinConditions = [rowWin1, rowWin2, rowWin3, colWin1, colWin2, colWin3, diagWin1, diagWin2]

function checkWin() {
    
    var gameWon = false

    for (let i = 0; i < allWinConditions.length; i++) {

        var winCondition = allWinConditions[i]
        var box1 = winCondition[0].innerText;
        var box2 = winCondition[1].innerText;
        var box3 = winCondition[2].innerText;

        if (box1 === box2 && box1 === box3){
            gameWon = true;
        } else {
            continue;
        }

    }

    if (gameWon === true) {
        resetGame();
    }

};


function resetGame() {

    var winner = firstPlayer === true ? '1' : '2';

    alert('Player ' + winner + ' has won! Play again?')

    init();

}



function init() {

    box1_1.innerText = 'a'
    box1_2.innerText = 'b'
    box1_3.innerText = 'c'

    box2_1.innerText = 'd'
    box2_2.innerText = 'e'
    box2_3.innerText = 'f'

    box3_1.innerText = 'g'
    box3_2.innerText = 'h'
    box3_3.innerText = 'k'

    allBoxes.forEach(function(i) {
        i.className = ''
    });

    document.querySelector('.player1').className = 'player1 active'
    document.querySelector('.player2').className = 'player2'

};






















