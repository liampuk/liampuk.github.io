var screen;
var prevElem = null;
var screenState = false;
var dark = false;
var name;
var stopNameLoop = false;
// var rndData = [11,3,15,9,5,7,3,9,17,7,17,9,20,14,1,21,29,23,7,29,17,4,14,12,20,15,4,12,30,20,5,23];
// var nearData = [1,0,2,3,4,7,5,6,8,10,9,11,13,14,12,15,17,18,19,16,20,22,21,24,23,26,25,27,28,29,31,30];
// var revData = [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
// var uniData = [29,22,5,16,16,16,5,12,5,22,16,5,16,22,12,5,29,22,32,32,32,22,12,5,22,5,12,29,29,12,12,5];

// var rndData = selectionSort[0][selectionSort[0].length-1];
// var nearData = selectionSort[1][selectionSort[0].length-1];
// var revData = selectionSort[2][selectionSort[0].length-1];
// var uniData = selectionSort[3][selectionSort[0].length-1];

var rndData = selectionSort[0][0];
var nearData = selectionSort[1][0];
var revData = selectionSort[2][0];
var uniData = selectionSort[3][0];

var rndDataTemp;
var nearDataTemp;
var revDataTemp;
var uniDataTemp;

var sortName;

// var dataSet = [
//     [6,21,1,29,11,20,3,17,4,25,7,27,16,10,24,30,14,26,32,19,18,15,22,8,13,9,28,5,23,31,2,12],
//     [1,0,2,3,4,7,5,6,8,10,9,11,13,14,12,15,17,18,19,16,20,22,21,24,23,26,25,27,28,29,31,30],
//     [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],
//     [29,22,5,16,16,16,5,12,5,22,16,5,16,22,12,5,29,22,32,32,32,22,12,5,22,5,12,29,29,12,12,5]
// ];

var blockAnim = false;

function toggleDisplay(elem) {
    if (prevElem != null && elem == prevElem && screenState) {
        prevElem.classList.remove("active");
        screen.style.opacity = "0";
        screen.style.transform = "scale(.98)";
        screenState = false;
    } else {
        if (prevElem != null) {
            document.getElementById(prevElem.innerText.substring(2).replace(new RegExp(" ", "g"), '')).setAttribute('style', 'display:none !important');
            prevElem.classList.remove("active");
        }
        if (!screenState) {
            screenState = true;
            screen.style.opacity = "1";
            screen.style.transform = "scale(1)";
        }
        document.getElementById(elem.innerText.substring(2).replace(new RegExp(" ", "g"), '')).setAttribute('style', 'display:block !important');
        elem.classList.add("active");
    }

    sortName = elem.innerText.substring(2).replace(new RegExp(" ", "g"), '');

    if(sortName.endsWith("Sort")){
        drawGraphs(sortName, 0, rndData);
        drawGraphs(sortName, 1, nearData);
        drawGraphs(sortName, 2, revData);
        drawGraphs(sortName, 3, uniData);
        growCanvi(sortName);
    }

    prevElem = elem;
    // selectionSort(0);
    // selectionSort(1);
    // selectionSort(2);
    // selectionSort(3);

    setTimeout(function(){
        animateGraphs(sortName, 0, 0, 0, 0, 0);
    },2200);
}

function changeTheme() {
    if (dark) {
        document.body.classList.remove("body-dark");
        document.documentElement.classList.remove("dark-scroll");
        document.getElementById("colours").classList.remove("colours-dark");
        document.getElementById("colours").classList.add("colours-light");
        dark = false;
        var accents = document.getElementsByClassName("accent-dark");
        while (accents.length > 0) {
            accents[0].classList.add("accent");
            accents[0].classList.remove("accent-dark");
        }
        var canvi = document.getElementsByTagName("canvas");
        for(var i=0; i<canvi.length; i++){
            canvi[i].classList.remove("invert");
            canvi[i].previousElementSibling.style.color = "black";
        }
        localStorage.setItem("algoTheme", "light");
    } else {
        document.body.classList.add("body-dark");
        document.documentElement.classList.add("dark-scroll");
        document.getElementById("colours").classList.add("colours-dark");
        document.getElementById("colours").classList.remove("colours-light");
        dark = true;
        var accents = document.getElementsByClassName("accent");
        while (accents.length > 0) {
            accents[0].classList.add("accent-dark");
            accents[0].classList.remove("accent");
        }
        var canvi = document.getElementsByTagName("canvas");
        for(var i=0; i<canvi.length; i++){
            canvi[i].classList.add("invert");
            canvi[i].previousElementSibling.style.color = "white";
        }
        localStorage.setItem("algoTheme", "dark");
    }
}

function growCanvi(sortName,){
    setTimeout(function () {
        document.querySelectorAll("#"+sortName+" canvas")[0].classList.remove("short");
        setTimeout(function () {
            document.querySelectorAll("#"+sortName+" canvas")[1].classList.remove("short");
            setTimeout(function () {
                document.querySelectorAll("#"+sortName+" canvas")[2].classList.remove("short");
                setTimeout(function () {
                    document.querySelectorAll("#"+sortName+" canvas")[3].classList.remove("short");
                    setTimeout(function () {
                        document.querySelectorAll("#"+sortName+" .playback")[0].classList.remove("short");
                    }, 800);
                }, 150);
            }, 150);
        }, 150);
    }, 500);
}

function init() {
    if (localStorage.algoTheme){
        if(localStorage.getItem("algoTheme") == "dark"){
            dark = false;
            changeTheme();
        }else{
            dark = true;
            changeTheme();
        }
    }
    
    screen = document.getElementById("screen");
    var elem = document.getElementsByTagName("span")[4];
    setTimeout(function () {
        elem.click();
        setTimeout(function () {
            elem.classList.remove("active");
            setTimeout(function () {
                elem.classList.add("active");
            }, 100);
        }, 200);
    }, 500);

    setTimeout(function () {
        document.getElementById("clr1").classList.remove("load-in");
        document.getElementById("link").classList.remove("load-in");
        setTimeout(function () {
            document.getElementById("clr2").classList.remove("load-in");
            setTimeout(function () {
                document.getElementById("clr3").classList.remove("load-in");
                setTimeout(function () {
                    document.getElementById("clr4").classList.remove("load-in");
                }, 50);
            }, 50);
        }, 50);
    }, 1000);

}

function drawGraphs(sortName, c, arr){
    var canvas = document.querySelectorAll("#"+sortName+" canvas")[c];
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    
    xPos = 2;
    num = 0;

    while(xPos <= width){
        ctx.moveTo(xPos, height);
        ctx.lineTo(xPos, height-(height/32*arr[num]));
        ctx.stroke();
        xPos = xPos + 8;
        num = num+1;
    }
    ctx.closePath();
}

// ### web link animation ###

var arrN = [0,0,0,0,0,0,0,0];
var canGo = true;
var stillGo = true;

function animateNameGate(){
    if(canGo){
        stillGo = true;
        animateName(0);
        canGo = false;
    }
}

function animateNameStop(){
    resetName();
    stillGo = false;
    canGo = true;
}

function resetName(){
    for(var i=0; i<=7; i++){
    document.querySelectorAll("footer i")[i].style.top = "0";
    }
}

function animateName(n){
    if(n <= 3){
        arrN.pop();
        arrN.unshift(1);
        n = n+1;
    }else{
        arrN.pop(); 
        arrN.unshift(0);
        n= n+1;
        if(n > 6){
            n = 0;
        }
    }
    for(var i=0; i<=7; i++){
        if(arrN[i] == 1){
            document.querySelectorAll("footer i")[i].style.top = ".3vh";
        }else{
            document.querySelectorAll("footer i")[i].style.top = "0";
        }
    }
    setTimeout(function () {
        if(stillGo){
            animateName(n);
        }
    }, 100);
}


function animateGraphs(sortName, s, rndI, nearI, revI, uniI){
    if(rndI != -1){
        drawGraphs(sortName, 0, selectionSort[0][rndI]);
    }
    if(nearI != -1){
        drawGraphs(sortName, 1, selectionSort[1][nearI]);
    }
    if(revI != -1){
        drawGraphs(sortName, 2, selectionSort[2][revI]);
    }
    if(uniI != -1){
        drawGraphs(sortName, 3, selectionSort[3][uniI]);
    }

    setTimeout(function(){
        if(rndI+nearI+revI+uniI == -4){
            blockAnim = false;
            return;
        }
        rndI++;
        nearI++;
        revI++;
        uniI++;
        if(rndI >= selectionSort[0].length){
            rndI = -1;
        }
        if(nearI >= selectionSort[1].length){
            nearI = -1;
        }
        if(revI >= selectionSort[2].length){
            revI = -1;
        }
        if(uniI >= selectionSort[3].length){
            uniI = -1;
        }
        animateGraphs(sortName, s, rndI, nearI, revI, uniI);
    }, 80);
}

function restartGraphAnim(){
    if(!blockAnim){
        blockAnim = true;
        animateGraphs(sortName, 0, 0, 0, 0, 0);
    }
}






// var selectionSortPointer = [0,0];

// function selectionSort(n){
//     for(var i = 0; i<dataSet[n].length; i++){
//         var min = i;
//         for(var j = i+1; j<dataSet[n].length; j++){
//             if(dataSet[n][j] < dataSet[n][min]){
//                 min = j;
//             }
//         }
//         var temp = dataSet[n][i];
//         dataSet[n][i] = dataSet[n][min];
//         dataSet[n][min] = temp;
//     }
//     drawGraphs(sortName, n, dataSet[n]);
// }

