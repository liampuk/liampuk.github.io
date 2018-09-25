// var emojis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var emojis = ["\uD83D\uDE02","\uD83D\uDE05","\uD83D\uDE0B","\uD83D\uDE0E","\uD83D\uDE0D","\uD83E\uDD14","\uD83D\uDE36","\uD83D\uDE34","\uD83D\uDE2D","\uD83D\uDE2C","\uD83D\uDE31","\uD83D\uDE35","\uD83D\uDE20","\uD83D\uDC4C","\uD83D\uDD25","\u2764\uFE0F"];

function renderPad(){
    var width = Math.ceil(Math.sqrt(emojis.length));
    for(var i=0; i<emojis.length; i++){
        var elem = document.createElement('div');
        elem.className = "em-block";
        elem.onclick = function(){copy(this)};
        elem.textContent = emojis[i];
        document.getElementsByClassName("container")[0].appendChild(elem);
        if((i+1)%width == 0){
            document.getElementsByClassName("container")[0].appendChild(document.createElement('br'));
        }
    }
}

function copy(elem) {
    var copyElem = document.createElement("input");
    document.body.appendChild(copyElem);
    copyElem.setAttribute("id", "copyElem"); 
    document.getElementById("copyElem").value=elem.textContent;
    copyElem.select();
    document.execCommand("copy");
    document.body.removeChild(copyElem);
    flashToast(elem.textContent);
}

function flashToast(emoji){
    var toast = document.getElementsByClassName("bottom-toast")[0];
    toast.style.opacity = 1;
    toast.innerHTML = "Copied "+emoji;

    setTimeout(function(){
        toast.style.opacity = 0;
    }, 1500);
}

function toggleTheme(day){
    if(day){
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.getElementById("sun").innerHTML = '<i class="fas fa-circle"></i>';
        document.getElementById("moon").innerHTML = '<i class="far fa-moon"></i>';
    }else{
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        document.getElementById("sun").innerHTML = '<i class="far fa-circle"></i>';
        document.getElementById("moon").innerHTML = '<i class="fas fa-moon"></i>';
    }

}

window.onload = function(){
    renderPad();
}
