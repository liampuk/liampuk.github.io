// ### Global Variables ###

var canvas;
var ctx;
var moveSounds = [];
var clearSound;
var mod = 1;
var mouseOff = false;
var vol = true;
var confirmReset = false;
var col = ["", "#222", "#fff", "rgba(0,0,0,0.5)", "rgba(255,255,255,0.5)"];
var lPos = [0, 0];
var mPos = [0, 0];
var turn = 1;
var codeMap = "23456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$-_.+!,'()*"
var board;

// ### Initialisation functions ###

function init() {
    clearBoard();
    window.addEventListener('resize', function(){
        windowSizeMod();
    }, true);
    loadGame();
    windowSizeMod();
    
    canvas = document.getElementById("board-canvas");
    ctx = canvas.getContext("2d");

    moveSounds[1] = new Audio("res/go/move.mp3");
    moveSounds[2] = new Audio("res/go/move.mp3");
    clearSound = new Audio("res/go/clear.mp3");

    canvas.addEventListener('mousemove', function (evt) {
        mouseMove(evt);
    });

    canvas.addEventListener('click', function (evt) {
        mouseClick(evt);
        // mouseMove(evt);
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
    var boardBackingElem = document.getElementById("board-colour-backing");
    var skip = document.getElementById("skip");
    var reset = document.getElementById("reset");
    var vol = document.getElementById("vol");
    var expo = document.getElementById("export");
    var skipBacking = document.getElementById("skip-backing");
    var resetBacking = document.getElementById("reset-backing");
    var volBacking = document.getElementById("vol-backing");
    var expoBacking = document.getElementById("export-backing");
    setTimeout(function () {
        boardElem.classList.add("boardPseudo");
        boardElem.style.transform = "translate(0px,0px)";
        boardBackingElem.style.transform = "translate(0px,0px)";
        setTimeout(function () {
            skip.style.opacity = "1";
            reset.style.opacity = "1";
            vol.style.opacity = "1";
            expo.style.opacity = "1";
            setTimeout(function(){
                skipBacking.style.backgroundColor = "#222";
                resetBacking.style.backgroundColor = "#222";
                volBacking.style.backgroundColor = "#222";
                expoBacking.style.backgroundColor = "#222";
            },1000)
        }, 2000)
    }, 300);
}

// ### Rendering Functions ###

function renderStone(x, y, c, s) {
    var rX = 26 + x * 40;
    var rY = 26 + y * 40;
    ctx.beginPath();
    ctx.arc(rX, rY, 18, 0, 2 * Math.PI, false);
    ctx.fillStyle = c;
    if (s) {
        // if(mouseOff){
        //     if(turn == 1){
        //         ctx.fillStyle = "rgba(0,0,0,0.5)"
        //     }else{
        //         ctx.fillStyle = "rgba(255,255,255,0.5)"
        //     }
        // }
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
    var x = Math.floor(((evt.clientX - rect.left)*mod) / 40);
    var y = Math.floor(((evt.clientY - rect.top)*mod) / 40);
    var mouseOffMod = 0;
    clearGrid();
    if (x < 19 && y < 19) {
        if(board[y][x] != 0){
            mouseOffMod = 2;
        }else{
            mouseOffMod = 0;
            mPos = [x, y];
        }
        clearGrid();
        renderGrid();
        if(!(mPos[0] == lPos[0] && mPos[1] == lPos[1])){
            renderStone(mPos[0], mPos[1], col[turn+mouseOffMod], true);
        }
    }
}

function mouseClick(evt) {
    // isLegal(mPos[0],mPos[1])
    if (board[mPos[1]][mPos[0]] == 0) {
        lPos[0] = mPos[0];
        lPos[1] = mPos[1];
        updateBoard(mPos[0], mPos[1], turn);
        if (turn == 1) {
            turn = 2;
        } else {
            turn = 1;
        }
        if(vol){
            moveSounds[turn].play();
        }
    }
    mouseMove(evt);
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
        if(board.toString().replace(/[,0]/g, "").length>0){
            clearSound.play();
            turn = 1;
        }
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
    var zeroCount = 0;
    var boardExp = board.toString().replace(/,/g, "");
    var expBuilder = "";
    for(var i=0; i<boardExp.length; i++){
        if(boardExp.charAt(i) == "1"){
            while(zeroCount > 0){
                if(zeroCount > 71){
                    expBuilder = expBuilder + codeMap.charAt(70);
                    zeroCount = zeroCount - 71;
                }else{
                    expBuilder = expBuilder + codeMap.charAt(zeroCount-1);
                    zeroCount = 0;
                }
            }
            expBuilder = expBuilder + "0";
        }else if(boardExp.charAt(i) == "2"){
            while(zeroCount > 0){
                if(zeroCount > 71){
                    expBuilder = expBuilder + codeMap.charAt(70);
                    zeroCount = zeroCount - 71
                }else{
                    expBuilder = expBuilder + codeMap.charAt(zeroCount-1);
                    zeroCount = 0;
                }
            }
            expBuilder = expBuilder + "1";
        }else if(boardExp.charAt(i) == "0"){
            zeroCount++;
        }
    }
    while(zeroCount > 0){
        if(zeroCount > 71){
            expBuilder = expBuilder + codeMap.charAt(70);
            zeroCount = zeroCount - 71
        }else{
            expBuilder = expBuilder + codeMap.charAt(zeroCount-1);
            zeroCount = 0;
        }
    }

    copy(expBuilder);
    showPopout("game url copied to clipboard", 5000);
}

// copies game url to clipboard

function copy(url) {
    var copyElem = document.createElement("input");
    document.body.appendChild(copyElem);
    copyElem.setAttribute("id", "copyElem");
    document.getElementById("copyElem").value = "http://liamp.uk/go?board="+url;
    // document.getElementById("copyElem").value = "http://127.0.0.1:5500/go.html?board="+url;
    copyElem.select();
    document.execCommand("copy");
    document.body.removeChild(copyElem);
}

// loads game from url

function loadGame(){
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('board');
    if(code == null){
        return;
    }
    var boardBuilder = "";
    for(var i=0; i<code.length; i++){
        if(code.charAt(i) == "0"){
            boardBuilder = boardBuilder + "1";
        }else if(code.charAt(i) == "1"){
            boardBuilder = boardBuilder + "2";
        }else{
            for(var j=0; j<codeMap.indexOf(code.charAt(i))+1; j++){
                boardBuilder = boardBuilder + "0";
            }
        }
    }
    for (var x = 0; x < 19; x++) {
        for (var y = 0; y < 19; y++) {
            board[y][x] = boardBuilder.charAt(x+(y*19));
        }
    }
}

// ### Utility functions ###

// handler for sound effects

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

// Allows for scaling the webpage on smaller devices

function windowSizeMod(){
    var height = document.documentElement.clientHeight;
    var popout = document.getElementById("popout");

    if(height < 768){
        mod = 1.25;
        popout.classList.add("hide-clip");
    }else{
        mod = 1;
        popout.classList.remove("hide-clip");
    }
}

// Shows and hides popout for copying url and warning

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

// ### game logic ###

var curGroupId = 0;
var groupToLibsMap = new Object();
var stoneToGroupMap = new Object();

function isLegal(x,y){
    var libs = 4;
    var groupFound = false;
    // Check stone to left
    if(x > 0 && board[y][x-1] > 0){
        if(board[y][x-1] == turn){
            groupFound = true;
            stoneToGroupMap[x+","+y]=stoneToGroupMap[x-1+","+y];
            libs = libs-2;
        }else{
            libs--;
            groupToLibsMap[stoneToGroupMap[x-1+","+y]] = groupToLibsMap[stoneToGroupMap[x-1+","+y]]-1;
        }
    }
    // Check stone above
    if(x > 0 && board[y-1][x] > 0){
        if(board[y-1][x1] == turn){
            groupFound = true;
            stoneToGroupMap[x+","+y]=stoneToGroupMap[x+","+y-1];
            libs = libs-2;
        }else{
            libs--;
            groupToLibsMap[stoneToGroupMap[x+","+y-1]] = groupToLibsMap[stoneToGroupMap[x+","+y-1]]-1;
        }
    }
    
    //TODO add all angles
    
    if(!groupFound){
        stoneToGroupMap[x+","+y] = curGroupId;
        curGroupId++;
        groupToLibsMap[stoneToGroupMap[x+","+y]] = libs;
    }else{
        groupToLibsMap[stoneToGroupMap[x+","+y]] = groupToLibsMap[stoneToGroupMap[x+","+y]]+libs;
    }


}

function placeStone(x,y){
    // TODO update board
}