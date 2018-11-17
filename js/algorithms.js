var screen;
var prevElem = null;
var screenState = false;
var dark = false;

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
        document.documentElement.classList.remove("dark-scroll");
        document.body.classList.remove("body-dark");
        document.getElementById("colours").classList.remove("colours-dark");
        document.getElementById("colours").classList.add("colours-light");
        dark = false;
        var accents = document.getElementsByClassName("accent-dark");
        while (accents.length > 0) {
            accents[0].classList.add("accent");
            accents[0].classList.remove("accent-dark");
        }
    } else {
        document.documentElement.classList.add("dark-scroll");
        document.body.classList.add("body-dark");
        document.getElementById("colours").classList.add("colours-dark");
        document.getElementById("colours").classList.remove("colours-light");
        dark = true;
        var accents = document.getElementsByClassName("accent");
        while (accents.length > 0) {
            accents[0].classList.add("accent-dark");
            accents[0].classList.remove("accent");
        }
    }
}

function init() {
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
}