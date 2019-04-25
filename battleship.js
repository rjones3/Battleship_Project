var turn = true;
var player1 = {};
var player2 = {
    x:randomtile(),
    y:randomtile()
    }
var compshots = []
var gameover = false;




function setplayer1() {
    var confirm = document.getElementById('confirm');
    confirm.className = " btn";
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box){
        box.addEventListener('click', setPlayer1Location);
    });
}

function setPlayer1Location() {

    var battleship = document.querySelector('.battleship');
    if (battleship) {
        battleship.className += 'box';
    }
    event.target.className += ' battleship';
    player1 = {
        x: Number(event.target.dataset.x),
        y: Number(event.target.dataset.y)
    }
    return player1
}

function confirmPlayer1() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box){
        box.removeEventListener('click', setPlayer1Location);
        box.addEventListener('click', play);
    });
}

function play() {
    if (gameover) {
        return;
    }        
    if (turn) {
        console.log("Player 1")
        turn = false;
        shot = {
            x: Number(event.target.dataset.x),
            y: Number(event.target.dataset.y)
        }
        console.log(shot)
        event.target.style.background = "red";
        
        result = HitOrMiss(shot, player2)
        console.log(result)
        player = "Player"
    } else {
        console.log("Player 2")
        turn = true;
        var shot = {
            x: randomtile(),
            y: randomtile()
        }
        var boom = document.querySelector('.compshot')
        
        // setTimeout(function(){event.target.classname += ' boom'; }, 2000); 
        compshots.push(shot);
        console.log(compshots)
        result = HitOrMiss(shot, player1) 
        player = "The Computer"
    }

    if (result) {
        gameover = true
        alert(player + ' Wins!')
        console.log(player + ' You Win');
        return true
        } else {
            console.log(player + ' Missed');
            if (!turn) {
            play();
        }
    }
} 

function randomtile() {
    return Math.ceil(Math.random() * 10)
}
function HitOrMiss(obj1, obj2) {
    
    for (var ar in obj1) {
        var ar1 = obj1[ar];
        var ar2 = obj2[ar];
        
        if (ar1 !== ar2) {
            return false
        }
        
    }
    return true
}