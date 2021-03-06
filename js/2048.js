var cells0 =   [0,0,0,0,
                0,0,0,0,
                0,0,0,0,
                0,0,0,0,];

var cellsn =   [1,0,0,0,
                0,0,0,0,
                0,0,0,0,
                0,0,0,0,];


var cells = setupGame();

var ended = false;


/*
var cells =    [0,2,4,8,
    16,32,64,128,
    256,512,1024,2048,
    4096,8192,0,0];
    */

var cells;

var currCell;

function setupGame() {
    if (localStorage.getItem("game") === null) {
        localStorage.setItem("game", cellsn);
        restart();
    } else {
        cells = localStorage.getItem("game").split(",").map(Number);
        refreshScreen();
    }



    return cells;
}

function refreshScreen() {
    for (var i = 0; i < 16; i++) {
        currCell = document.getElementsByClassName('c' + (i % 4 + 1))[Math.floor(i / 4)];
        currCell.innerHTML = cells[i] !== 0 ? cells[i] : "";
        if (cells[i] == 0) {
            currCell.setAttribute("style", "background-color: #1d3134;");
        } else if (cells[i] == 2) {
            currCell.setAttribute("style", "background-color: #E0F2F1;color: black;");
        } else if (cells[i] == 4) {
            currCell.setAttribute("style", "background-color: #d0e8e6;color: black;");
        } else if (cells[i] == 8) {
            currCell.setAttribute("style", "background-color: #23726b;");
        } else if (cells[i] == 16) {
            currCell.setAttribute("style", "background-color: #258e85;");
        } else if (cells[i] == 32) {
            currCell.setAttribute("style", "background-color: #18baac;");
        } else if (cells[i] == 64) {
            currCell.setAttribute("style", "background-color: #0ad1c0;");
        } else if (cells[i] == 128) {
            currCell.setAttribute("style", "background-color: #417552;");
        } else if (cells[i] == 256) {
            currCell.setAttribute("style", "background-color: #49a366;");
        } else if (cells[i] == 512) {
            currCell.setAttribute("style", "background-color: #39ce6a;");
        } else if (cells[i] == 1024) {
            currCell.setAttribute("style", "background-color: #FF8A3D;");
        } else if (cells[i] == 2048) {
            currCell.setAttribute("style", "background-color: #C94A07;");
        } else if (cells[i] == 4096) {
            currCell.setAttribute("style", "background-color: #7F2E0F;");
        } else if (cells[i] == 8192) {
            currCell.setAttribute("style", "background-color: #401708;");
        }
    }
    calculateHighScore();
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 37) {
        moveLeft();
    } else if (evt.keyCode == 38) {
        moveUp();
    } else if (evt.keyCode == 39) {
        moveRight();
    } else if (evt.keyCode == 40) {
        moveDown();
    } else if (evt.keyCode == 78) {
        restart();
    }
    checkEnd();
};

function restart() {
    document.getElementById("reset").style.color = "red";
    setTimeout(function() {
        document.getElementById("reset").style.color = "#0ad1c0";
    }, 100);
    cells = [0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,];;
    addCell();
    refreshScreen();
    var gO = document.getElementById("gameOver");
    gO.style.display = "none";
    ended = false;
}

function addCell() {
    if (!equalArr(cells, localStorage.getItem("game").split(",").map(Number))) {
        newCell = Math.floor(Math.random() * 17);
        if (cells[newCell] == 0) {
            cells[newCell] = Math.random() < 0.9 ? 2 : 4;
            refreshScreen();
        } else {
            addCell();
        }
        localStorage.setItem("game", cells);
    }
}

function equalArr(arr1, arr2) {
    for (var i = 0; i < 16; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}



function shiftRight() {
    var i = 15;
    while (i >= 0) {
        if (cells[i] == 0) {
            if (cells[i - 1] !== 0) {
                cells[i] = cells[i - 1];
                cells[i - 1] = 0;
            }
        }
        i -= 4;
        if (i < 1 && (i > -3)) {
            i += 15;
        }
    }
}

function moveRight() {
    var i = 15;
    while (i >= 0) {
        shiftRight();
        shiftRight();
        if (cells[i] == cells[i - 1]) {
            cells[i] = cells[i] * 2;
            cells[i - 1] = 0;
            shiftRight();
        }
        i -= 4;
        if (i < 1 && (i > -3)) {
            i += 15;
        }
    }
    addCell();
}




function shiftLeft() {
    var i = 0;
    while (i <= 14) {
        if (cells[i] == 0) {
            if (cells[i + 1] !== 0) {
                cells[i] = cells[i + 1];
                cells[i + 1] = 0;
            }
        }
        i += 4;
        if (i > 14 && (i < 18)) {
            i -= 15;
        }
    }
}

function moveLeft() {
    var i = 0;
    while (i <= 14) {
        shiftLeft();
        shiftLeft();
        if (cells[i] == cells[i + 1]) {
            cells[i] = cells[i] * 2;
            cells[i + 1] = 0;
            shiftLeft();
        }

        i += 4;
        if (i > 14 && (i < 18)) {
            i -= 15;
        }
    }
    addCell();
}




function shiftDown() {
    for (var i = 15; i > 3; i--) {
        if (cells[i] == 0) {
            if (cells[i - 4] !== 0) {
                cells[i] = cells[i - 4];
                cells[i - 4] = 0;
            }
        }
    }
}

function moveDown() {
    for (var i = 15; i > 3; i--) {
        shiftDown();
        shiftDown();
        if (cells[i] == cells[i - 4]) {
            cells[i] = cells[i] * 2;
            cells[i - 4] = 0;
            shiftDown();
        }
    }
    addCell();
}

function shiftUp() {
    for (var i = 0; i < 12; i++) {
        if (cells[i] == 0) {
            if (cells[i + 4] !== 0) {
                cells[i] = cells[i + 4];
                cells[i + 4] = 0;
            }
        }
    }
}

function moveUp() {
    shiftUp();
    shiftUp();
    for (var i = 0; i < 12; i++) {
        if (cells[i] == cells[i + 4]) {
            cells[i] = cells[i] * 2;
            cells[i + 4] = 0;
            shiftUp();
        }
    }
    addCell();
}

function checkEnd() {
    var end = true;
    for (var i = 0; i < 16; i++) {
        if (cells[i] == 0) {
            end = false;
        }
    }

    var i = 15;
    while (i >= 0) {
        if (cells[i] == cells[i - 1]) {
            end = false;
        }
        i -= 4;
        if (i < 1 && (i > -3)) {
            i += 15;
        }
    }

    for (var i = 0; i < 12; i++) {
        if (cells[i] == cells[i + 4]) {
            end = false;
        }
    }

    if(end && !ended){
        ended = true;
        gameOver();
    }
}

function gameOver() {
    var gO = document.getElementById("gameOver");
    gO.style.display = "block";
}

function calculateHighScore(){

    var higherScore = 0;

    if (localStorage.getItem("highScore") === null) {
        localStorage.setItem("highScore", 0);
    } else {
        higherScore = localStorage.getItem("highScore");
    }

    var highScore = 0;

    for(var i=0;i<16;i++){
        highScore += cells[i];
    }

    if(highScore > higherScore){
        higherScore = highScore;
        localStorage.setItem("highScore", higherScore);
    }

    document.getElementById("highScore").innerHTML = "High Score: " + higherScore;
}

document.addEventListener('touchstart', touchDetect, false);
document.addEventListener('touchmove', swipeDetect, false);

var xDown, yDown;

function touchDetect(evt){
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function swipeDetect(evt){
    if ( xDown == null || yDown == null ) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if(Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff > 0){
            moveLeft();
        }else{
            moveRight();
        }
    }else{
        if(yDiff > 0){
            moveUp();
        }else{
            moveDown();
        }
    }

    xDown = null;
    yDown = null;

    checkEnd();
}

window.onload = setupGame();
