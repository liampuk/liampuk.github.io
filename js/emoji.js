// var emojis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
//  var emojiSample = ["\uD83D\uDE02","\uD83D\uDE05","\uD83D\uDE0B","\uD83D\uDE0E","\uD83D\uDE0D","\uD83E\uDD14","\uD83D\uDE36","\uD83D\uDE34","\uD83D\uDE2D","\uD83D\uDE2C","\uD83D\uDE31","\uD83D\uDE35","\uD83D\uDE20","\uD83D\uDC4C","\uD83D\uDD25","\u2764\uFE0F"];
var emojis = ["\uD83D\uDE00", "\uD83D\uDE03", "\uD83D\uDE04", "\uD83D\uDE01", "\uD83D\uDE06", "\uD83D\uDE05", "\uD83E\uDD23", "\uD83D\uDE02", "\uD83D\uDE42", "\uD83D\uDE43", "\uD83D\uDE09", "\uD83D\uDE0A", "\uD83D\uDE07", "\uD83E\uDD70", "\uD83D\uDE0D", "\uD83E\uDD29", "\uD83D\uDE18", "\uD83D\uDE17", "\u263A", "\uD83D\uDE1A", "\uD83D\uDE19", "\uD83D\uDE0B", "\uD83D\uDE1B", "\uD83D\uDE1C", "\uD83E\uDD2A", "\uD83D\uDE1D", "\uD83E\uDD11", "\uD83E\uDD17", "\uD83E\uDD2D", "\uD83E\uDD2B", "\uD83E\uDD14", "\uD83E\uDD10", "\uD83E\uDD28", "\uD83D\uDE10", "\uD83D\uDE11", "\uD83D\uDE36", "\uD83D\uDE0F", "\uD83D\uDE12", "\uD83D\uDE44", "\uD83D\uDE2C", "\uD83E\uDD25", "\uD83D\uDE0C", "\uD83D\uDE14", "\uD83D\uDE2A", "\uD83E\uDD24", "\uD83D\uDE34", "\uD83D\uDE37", "\uD83E\uDD12", "\uD83E\uDD15", "\uD83E\uDD22", "\uD83E\uDD2E", "\uD83E\uDD27", "\uD83E\uDD75", "\uD83E\uDD76", "\uD83E\uDD74", "\uD83D\uDE35", "\uD83E\uDD2F", "\uD83E\uDD20", "\uD83E\uDD73", "\uD83D\uDE0E", "\uD83E\uDD13", "\uD83E\uDDD0", "\uD83D\uDE15", "\uD83D\uDE1F", "\uD83D\uDE41", "\u2639", "\uD83D\uDE2E", "\uD83D\uDE2F", "\uD83D\uDE32", "\uD83D\uDE33", "\uD83E\uDD7A", "\uD83D\uDE26", "\uD83D\uDE27", "\uD83D\uDE28", "\uD83D\uDE30", "\uD83D\uDE25", "\uD83D\uDE22", "\uD83D\uDE2D", "\uD83D\uDE31", "\uD83D\uDE16", "\uD83D\uDE23", "\uD83D\uDE1E", "\uD83D\uDE13", "\uD83D\uDE29", "\uD83D\uDE2B", "\uD83D\uDE24", "\uD83D\uDE21", "\uD83D\uDE20", "\uD83E\uDD2C", "\uD83D\uDE08", "\uD83D\uDC7F", "\uD83D\uDC80", "\u2620", "\uD83D\uDCA9", "\uD83E\uDD21", "\uD83D\uDC79", "\uD83D\uDC7A", "\uD83D\uDC7B", "\uD83D\uDC7D", "\uD83D\uDC7E", "\uD83E\uDD16", "\uD83D\uDE3A", "\uD83D\uDE38", "\uD83D\uDE39", "\uD83D\uDE3B", "\uD83D\uDE3C", "\uD83D\uDE3D", "\uD83D\uDE40", "\uD83D\uDE3F", "\uD83D\uDE3E", "\uD83D\uDE48", "\uD83D\uDE49", "\uD83D\uDE4A", "\uD83D\uDC8B", "\uD83D\uDC8C", "\uD83D\uDC98", "\uD83D\uDC9D", "\uD83D\uDC96", "\uD83D\uDC97", "\uD83D\uDC93", "\uD83D\uDC9E", "\uD83D\uDC95", "\uD83D\uDC9F", "\u2763", "\uD83D\uDC94", "\u2764\uFE0F", "\uD83E\uDDE1", "\uD83D\uDC9B", "\uD83D\uDC9A", "\uD83D\uDC99", "\uD83D\uDC9C", "\uD83D\uDDA4", "\uD83D\uDCAF", "\uD83D\uDCA2", "\uD83D\uDCA5", "\uD83D\uDCAB", "\uD83D\uDCA6", "\uD83D\uDCA8", "\uD83D\uDD73", "\uD83D\uDCA3", "\uD83D\uDCAC", "\uD83D\uDC41", "\uD83D\uDDE8", "\uD83D\uDDEF", "\uD83D\uDCAD", "\uD83D\uDCA4", "\uD83D\uDC4B", "\uD83E\uDD1A", "\uD83D\uDD90", "\u270B", "\uD83D\uDD96", "\uD83D\uDC4C", "\u270C", "\uD83E\uDD1E", "\uD83E\uDD1F", "\uD83E\uDD18", "\uD83E\uDD19", "\uD83D\uDC48", "\uD83D\uDC49", "\uD83D\uDC46", "\uD83D\uDD95", "\uD83D\uDC47", "\u261D", "\uD83D\uDC4D", "\uD83D\uDC4E", "\u270A", "\uD83D\uDC4A", "\uD83E\uDD1B", "\uD83E\uDD1C", "\uD83D\uDC4F", "\uD83D\uDE4C", "\uD83D\uDC50", "\uD83E\uDD32", "\uD83E\uDD1D", "\uD83D\uDE4F", "\u270D", "\uD83D\uDC85", "\uD83E\uDD33", "\uD83D\uDCAA", "\uD83E\uDDB5", "\uD83E\uDDB6", "\uD83D\uDC42", "\uD83D\uDC43", "\uD83E\uDDE0", "\uD83E\uDDB7", "\uD83E\uDDB4", "\uD83D\uDC40", "\uD83D\uDC41", "\uD83D\uDC45", "\uD83D\uDC44", "\uD83D\uDD25"]

var emojiSample = [7, 5, 21, 59, 14, 30, 35, 45, 77, 39, 78, 55, 87, 152, 190, 125];

var emojiMap;

var waitForAnim = 0;
var panelOpen = false;

function storage() {
    if (localStorage.emojis) {
        emojiMap = JSON.parse(localStorage.getItem("emojis"));
        if(emojiMap.length == 0){
            localStorage.emojis = JSON.stringify(emojiSample);
            emojiMap = emojiSample;
            document.getElementsByClassName("grid")[0].style.transition = "";
            document.getElementsByClassName("grid")[0].style.opacity = 0;
            setTimeout(function () {
                document.getElementsByClassName("grid")[0].style.transition = "all .3s ease";
                document.getElementsByClassName("grid")[0].style.opacity = 1;
            }, 500);
        }
    } else {
        localStorage.emojis = JSON.stringify(emojiSample);
        emojiMap = emojiSample;
    }
}

function renderPad(remove) {
    var extraClass = "";
    if (remove) {
        extraClass = "remove ";
    }
    document.getElementsByClassName("grid")[0].innerHTML = "";
    storage();
    var width = Math.ceil(Math.sqrt(emojiMap.length));
    for (var i = 0; i < emojiMap.length; i++) {
        var elem = document.createElement('div');
        elem.className = extraClass + "em-block";
        if(remove){
            elem.onclick = function () { removeEmoji(this) };
        }else{
            elem.onclick = function () { copy(this) };
        }
        elem.textContent = emojis[emojiMap[i]];
        document.getElementsByClassName("grid")[0].appendChild(elem);
        if ((i + 1) % width == 0) {
            document.getElementsByClassName("grid")[0].appendChild(document.createElement('br'));
        }
    }
}

function addEmoji(elem) {
    emojiMap.push(emojis.indexOf(elem.textContent));
    console.log(emojiMap);
    localStorage.emojis = JSON.stringify(emojiMap);
    renderPad(true);
}

function removeEmoji(elem) {
    emojiMap.splice(emojiMap.indexOf(emojis.indexOf(elem.textContent)), 1);
    console.log(emojiMap);
    localStorage.emojis = JSON.stringify(emojiMap);
    renderPad(true);
}

function renderAddPad() {
    for (var i = 0; i < emojis.length; i++) {
        var elem = document.createElement('div');
        elem.className = "add em-block";
        elem.onclick = function () { addEmoji(this) };
        elem.textContent = emojis[i];
        document.getElementsByClassName("large-grid")[0].appendChild(elem);
    }
}

function copy(elem) {
    var copyElem = document.createElement("input");
    document.body.appendChild(copyElem);
    copyElem.setAttribute("id", "copyElem");
    document.getElementById("copyElem").value = elem.textContent;
    copyElem.select();
    document.execCommand("copy");
    document.body.removeChild(copyElem);
    flashToast(elem.textContent);
}

function flashToast(emoji) {
    var toast = document.getElementsByClassName("bottom-toast")[0];
    toast.style.opacity = 1;
    toast.innerHTML = "Copied " + emoji;
    waitForAnim += 1;
    setTimeout(function () {
        waitForAnim -= 1;
        if (waitForAnim == 0) {
            toast.style.opacity = 0;
        }
    }, 1500);
}

function toggleTheme(day) {
    if (day) {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.getElementById("sun").innerHTML = '<i class="fas fa-circle"></i>';
        document.getElementById("moon").innerHTML = '<i class="far fa-moon"></i>';
    } else {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        document.getElementById("sun").innerHTML = '<i class="far fa-circle"></i>';
        document.getElementById("moon").innerHTML = '<i class="fas fa-moon"></i>';
    }

}

function togglePanel() {
    if (panelOpen) {
        document.getElementsByClassName("main")[0].style.width = "100vw";
        document.getElementsByClassName("panel")[0].style.width = "3vw";
        document.getElementsByClassName("panel")[0].style.backgroundColor = "rgba(192, 192, 192, 0)";
        document.getElementById("toggle-panel").innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.getElementsByClassName("remove-header")[0].style.opacity = 0;
        document.getElementsByClassName("panel-content")[0].style.opacity = 0;
        document.getElementsByClassName("large-grid")[0].style.width = "0vw";
        renderPad(false);
        panelOpen = !panelOpen;

    } else {
        document.getElementsByClassName("main")[0].style.width = "50vw";
        document.getElementsByClassName("panel")[0].style.width = "50vw";
        document.getElementsByClassName("panel")[0].style.backgroundColor = "rgba(192, 192, 192, 0.2)";
        document.getElementById("toggle-panel").innerHTML = '<i class="fas fa-chevron-left"></i>';
        document.getElementsByClassName("remove-header")[0].style.opacity = 1;
        document.getElementsByClassName("panel-content")[0].style.opacity = 1;
        document.getElementsByClassName("large-grid")[0].style.width = "44vw";
        renderPad(true);
        panelOpen = !panelOpen;
    }
}

window.onload = function () {
    renderPad(false);
    renderAddPad();
}
