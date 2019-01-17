// ### Global Variables ###

var canvas;
var ctx;
var moveSound;
var vol = true;
var confirmReset = false;
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

// ### Initialisation functions ###

function init() {
    loadGame();
    
    canvas = document.getElementById("board-canvas");
    ctx = canvas.getContext("2d");

    moveSound = new sound("res/go/move.mp3");

    canvas.addEventListener('mousemove', function (evt) {
        mouseMove(evt);
    });

    canvas.addEventListener('click', function (evt) {
        mouseClick(evt);
        mouseMove(evt);
    });

    canvas.addEventListener('mouseout', function (evt) {
        clearGrid();
        renderGrid();
    });

    renderGrid();
    raiseBoard();
}

function raiseBoard() {
    var boardElem = document.getElementById("board");
    var skip = document.getElementById("skip");
    var reset = document.getElementById("reset");
    var vol = document.getElementById("vol");
    var expo = document.getElementById("export");
    setTimeout(function () {
        boardElem.classList.add("boardPseudo");
        boardElem.style.transform = "translate(0px,0px)";
        setTimeout(function () {
            skip.style.opacity = "1";
            reset.style.opacity = "1";
            vol.style.opacity = "1";
            expo.style.opacity = "1";
        }, 2000)
    }, 300);
}

// ### Rendering Functions ###

function renderStone(x, y, c, s) {
    var rX = 24 + x * 40;
    var rY = 24 + y * 40;
    ctx.beginPath();
    ctx.arc(rX, rY, 18, 0, 2 * Math.PI, false);
    ctx.fillStyle = c;
    if (s) {
        ctx.shadowColor = 'rgba(0,0,0,0.3)';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
    } else {
        ctx.shadowColor = 'rgba(0,0,0,0.1)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
    }
    ctx.fill();
    ctx.closePath();
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

// ### Mouse functions ###

function mouseMove(evt) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor((evt.clientX - rect.left) / 40);
    var y = Math.floor((evt.clientY - rect.top) / 40);
    if (x < 19 && y < 19 && board[y][x] == 0) {
        mPos = [x, y];
        clearGrid();
        renderGrid();
        renderStone(x, y, col[turn], true);
    }
}

function mouseClick(evt) {
    if (board[mPos[1]][mPos[0]] == 0) {
        updateBoard(mPos[0], mPos[1], turn);
        if (turn == 1) {
            turn = 2;
        } else {
            turn = 1;
        }
    }
    if(vol){
        moveSound.play();
    }
}

// ### Control functions ###

// toggle sound effect

function toggleSound(){
    var muteElem = document.getElementById("mute");
    if(vol){
        vol = false;
        muteElem.src="res/go/sound.svg"
    }else{
        vol=true;
        muteElem.src="res/go/mute.svg"
    }
}

// skip turn

function skipTurn() {
    if (turn == 1) {
        turn = 2;
    } else {
        turn = 1;
    }
}

// reset the board

function resetHandler(){
    if(confirmReset){
        document.getElementById("reset").classList.remove("confirm");
        confirmReset = false;
        clearBoard();
        clearGrid();
        hidePopout();
    }else{
        showPopout("are you sure?", -1);
        document.getElementById("reset").classList.add("confirm");
        confirmReset = true;
    }
}

function unReset(){
    document.getElementById("reset").classList.remove("confirm");
    confirmReset = false;
    hidePopout();
}

// ### Game Sharing Functions ###

// formats game data for exporting

function exportGame(){
    var boardExp = board.toString().replace(/,/g, "");
    var expBuilder = "";
    curVal = boardExp.charAt(0);
    curCount = 0;
    addedLast = false;
    for(var i=0; i<boardExp.length; i++){
        if(boardExp.charAt(i) == curVal){
            curCount++;
            addedLast = false;
        }else{
            expBuilder = expBuilder + curVal+""+curCount+"a";
            curVal = boardExp.charAt(i);
            curCount = 1;
            addedLast = true;
        }
    }
    expBuilder = expBuilder + curVal+""+curCount;
    
    copy(expBuilder);

    showPopout("game url copied to clipboard", 5000);
}

function showPopout(text, timeout){
    var popout = document.getElementById("popout");
    document.getElementById("popout-text").innerText = text;
    popout.style.left = "-320px";
    if(timeout > 0){
        setTimeout(function(){
            popout.style.left = "0px";
        },timeout);
    }
}

function hidePopout(){
    var popout = document.getElementById("popout");
    popout.style.left = "0px";
}

// copies game url to clipboard

function copy(url) {
    var copyElem = document.createElement("input");
    document.body.appendChild(copyElem);
    copyElem.setAttribute("id", "copyElem");
    document.getElementById("copyElem").value = "http://liamp.uk/go?board="+url;
    copyElem.select();
    document.execCommand("copy");
    document.body.removeChild(copyElem);
}

// loads game from url

function loadGame(){
    var urlParams = new URLSearchParams(window.location.search);
    var dataFromUrl = urlParams.get('board');
    if(dataFromUrl == null){
        return;
    }
    var url = dataFromUrl.split("a");
    var boardBuilder = "";
    for(var i=0; i<url.length; i++){
        var val = url[i].substring(0,1);
        var num = url[i].substring(1);
        for(var j=0; j<num; j++){
            boardBuilder = boardBuilder + val;
        }
    }
    for (var x = 0; x < 19; x++) {
        for (var y = 0; y < 19; y++) {
            board[y][x] = boardBuilder.charAt(x+(y*19));
        }
    }
}

// ### Utility functions ###

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function clearBoard() {
    board = [
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
}

function clearGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateBoard(x, y, c) {
    board[y][x] = c;
}