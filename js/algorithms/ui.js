var screen;
var prevElem = null;
var screenState = false;
var dark = false;

function updateScreen(elem) {
    if (prevElem != null && elem == prevElem && screenState) {
        prevElem.classList.remove("active");
        screen.style.opacity = "0";
        screen.style.transform = "scale(.98)";
        screenState = false;
    } else {
        if (prevElem != null) {
            document.getElementById(prevElem.getAttribute('data-link')).setAttribute('style', 'display:none !important');
            prevElem.classList.remove("active");
        }
        if (!screenState) {
            screenState = true;
            screen.style.opacity = "1";
            screen.style.transform = "scale(1)";
        }
        document.getElementById(elem.getAttribute('data-link')).setAttribute('style', 'display:block !important');
        elem.classList.add("active");
    }
    prevElem = elem;
    refreshPage(elem.getAttribute('data-link'),0);
    if(barGraphAlgos.includes(algorithm)){
        renderTable();
    }else if(geometricAlgos.includes(algorithm)){
        renderGeoKey();
    }else if(rootAlgos.includes(algorithm)){
        renderRootKey();
    }
    renderAnimation();
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
        // var canvi = document.getElementsByTagName("canvas");
        // for(var i=0; i<canvi.length; i++){
        //     canvi[i].classList.remove("invert");
        //     canvi[i].previousElementSibling.style.color = "black";
        // }
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
        // var canvi = document.getElementsByTagName("canvas");
        // for(var i=0; i<canvi.length; i++){
        //     canvi[i].classList.add("invert");
        //     canvi[i].previousElementSibling.style.color = "white";
        // }
        localStorage.setItem("algoTheme", "dark");
    }
    if(document.getElementById(algorithm+"Canvas") != null){
        updateCanvas();
    }
    if(rootAlgos.includes(algorithm)){
        renderRootKey();
    }
}

function uiInit() {
    // load theme
    if (localStorage.algoTheme){
        if(localStorage.getItem("algoTheme") == "dark"){
            dark = false;
            changeTheme();
        }else{
            dark = true;
            changeTheme();
        }
    }
    
    // simulate clicking on the first screen
    screen = document.getElementById("screen");
    // INITIAL ALGORITHM LOADED
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

    // animate in footer items
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