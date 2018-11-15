var screen;
prevElem = null;
screenState = false;

function toggleDisplay(elem){
    if(prevElem != null && elem == prevElem && screenState){
        prevElem.style.backgroundColor = "transparent";
        prevElem.style.color = "black";
        screen.style.opacity = "0";
        screen.style.transform = "scale(.98)";
        screenState = false;
    }else{
        if(prevElem != null){
            document.getElementById(prevElem.innerText.substring(2).replace(new RegExp(" ", "g"), '')).setAttribute('style', 'display:none !important');
            prevElem.style.backgroundColor = "transparent";
            prevElem.style.color = "black";
        }
        if(!screenState){
            screenState = true;
            screen.style.opacity = "1";
            screen.style.transform = "scale(1)";
        }
        document.getElementById(elem.innerText.substring(2).replace(new RegExp(" ", "g"), '')).setAttribute('style', 'display:block !important');
        elem.style.backgroundColor = "#29B6F6";
        elem.style.color = "white";
    }
    prevElem = elem;
}

function init(){
    // document.getElementsByTagName("span")[4].click();
    screen = document.getElementById("screen");
}