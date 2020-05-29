var ctx;
var width;
var height;
var ctr = 0;
var colBool = 0;

var col1;
var col2;
var col;

var mod = 0;

var Asciimap = "               ,_   .  ._. _.  .                                     \r\n           , _-\\\',\'|~\\~      ~\/      ;-\'_   _-\'     ,;_;_,    ~~-    \r\n  \/~~-\\_\/-\'~\'--\' \\~~| \',    ,\'      \/  \/ ~|-_\\_\/~\/~      ~~--~~~~\'--_\r\n  \/              ,\/\'-\/~ \'\\ ,\' _  , \'|,\'|~                   ._\/-, \/~ \r\n  ~\/-\'~\\_,       \'-,| \'|. \'   ~  ,\\ \/\'~                \/    \/_  \/~   \r\n.-~      \'|        \'\',\\~|\\       _\\~     ,_  ,               \/|      \r\n          \'\\        \/\'~          |_\/~\\\\,-,~  \\ \"         ,_,\/ |      \r\n           |       \/            ._-~\'\\_ _~|              \\ ) \/       \r\n            \\   __-\\           \'\/      ~ |\\  \\_          \/  ~        \r\n  .,         \'\\ |,  ~-_      - |          \\\\_\' ~|  \/\\  \\~ ,          \r\n               ~-_\'  _;       \'\\           \'-,   \\,\' \/\\\/  |          \r\n                 \'\\_,~\'\\_       \\_ _,       \/\'    \'  |, \/|\'          \r\n                   \/     \\_       ~ |      \/         \\  ~\'; -,_.     \r\n                   |       ~\\        |    |  ,        \'-_, ,; ~ ~\\   \r\n                    \\,      \/        \\    \/ \/|            ,-, ,   -, \r\n                     |    ,\/          |  |\' |\/          ,-   ~ \\   \'.\r\n                    ,|   ,\/           \\ ,\/              \\       |    \r\n                    \/    |             ~                 -~~-, \/   _ \r\n                    |  ,-\'                                    ~    \/ \r\n                    \/ ,\'                                      ~      \r\n                    \',|  ~                                           \r\n                      ~\'                                             ";


function mapAnimation(){
    // document.getElementById('main').innerHTML = '<canvas id="canvas"></canvas>';
    rndColours();
    resizeMyCanvas();
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    width = ctx.canvas.clientWidth;
    height = ctx.canvas.clientHeight;

    ctx.font = "12px Courier";

    window.setInterval(function () { renderMap() }, 1);
}

function rndColours() {
    var hue1 = Math.floor(Math.random()*361);
    var hue2 = (hue1+((Math.floor(Math.random()*5)+1)*60))%360;
    col1 = hue1 + ",75%,55%";
    col2 = hue2 + ",75%,55%";
    col = col1;
}

function renderMap() {
    yMod = Math.random() * 90;
    var mSplit = Asciimap.split("\r\n");
    
    ctx.fillStyle = "hsla(" + col + "," + Math.random() / 3 + ")";
    for (var i = 0; i < mSplit.length; i++) {
        ctx.fillText(mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod), 0, -10 + i * 12 + yMod);
        ctx.fillText(mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod), 0, 235 + i * 12 + yMod);
        ctx.fillText(mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod), 0, 480 + i * 12 + yMod);
        ctx.fillText(mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod), 0, 725 + i * 12 + yMod);
    }
    mod++;
    if (mod > mSplit[0].length) {
        mod = 0;
    }
    if (ctr > Math.floor(Math.random() * 100)) {
        ctr = 0;
        if (colBool == 0) {
            col = col1;
            colBool = 1;
        } else {
            col = col2;
            colBool = 0;
        }
    }
    ctr++;
}

function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

function resizeMyCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}