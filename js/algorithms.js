var screen;
var prevElem = null;
var screenState = false;
var dark = false;
var name;
var stopNameLoop = false;

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
    prevElem = elem;
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
        localStorage.setItem("algoTheme", "dark");
    }
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

function animateName(l){
    // alert(arrN);
    if(l <= 3){
        arrN.pop();
        arrN.unshift(1);
        l = l+1;
    }else{
        arrN.pop();
        arrN.unshift(0);
        l= l+1;
        if(l > 6){
            l = 0;
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
            animateName(l);
        }
    }, 100);
    console.log(arrN);
}
