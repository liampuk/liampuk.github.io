var canvas;
var ctx;
var col = ["", "#222", "#fff"];
var mPos = [0, 0];
var turn = 1;
var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function init() {
    canvas = document.getElementById("board-canvas");
    ctx = canvas.getContext("2d");


    canvas.addEventListener('mousemove', function (evt) {
        mouseMove(evt);
    });

    canvas.addEventListener('click', function (evt) {
        mouseDown(evt);
        mouseMove(evt);
    });

    canvas.addEventListener('mouseout', function (evt) {
        clearGrid();
        renderGrid();
    });

    renderGrid();

    raiseBoard();
}


function mouseMove(evt) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor((evt.clientX - rect.left) / 40);
    var y = Math.floor((evt.clientY - rect.top) / 40);
    if (x < 19 && y < 19 && board[y][x]==0) {
        mPos = [x, y];
        clearGrid();
        renderGrid();
        renderStone(x, y, col[turn], true);
    }
}

function mouseDown(evt){
    if(board[mPos[1]][mPos[0]]==0){
        updateBoard(mPos[0], mPos[1], turn);
        if(turn == 1){
            turn = 2;
        }else{
            turn = 1;
        }
    }
}

function renderGrid() {
    for (var x = 0; x < 19; x++) {
        for (var y = 0; y < 19; y++) {
            if (board[y][x] > 0) {
                renderStone(x, y, col[board[y][x]]);
            }
        }
    }
}

function clearGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateBoard(x, y, c) {
    board[y][x] = c;
}

function renderStone(x, y, c, s) {
    var rX = 24 + x * 40;
    var rY = 24 + y * 40;
    ctx.beginPath();
    ctx.arc(rX, rY, 18, 0, 2 * Math.PI, false);
    ctx.fillStyle = c;
    if(s){
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
    }else{
        ctx.shadowColor = 'rgba(0,0,0,0)';
    }
    ctx.fill();
    ctx.closePath();
}

function raiseBoard(){
    var boardElem = document.getElementById("board");
    setTimeout(function(){
        boardElem.classList.add("boardPseudo");
        boardElem.style.transform = "translate(0px,0px)";
    },300);
}