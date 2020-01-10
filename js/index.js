var ctx;
var width;
var height;
var ctr = 0;
var colBool = 0;
var shift = 0;
var speed = 2;

var col1 = Math.floor(Math.random() * 360) + ",75%,55%";
var col2 = Math.floor(Math.random() * 360) + ",75%,55%";
var col = col1;

var wormX;
var wormY;
var wormXvel = speed;
var wormYvel = speed;

var mousePos;

var enableWorm = false;

var mod = 0;

var Asciimap = "               ,_   .  ._. _.  .                                     \r\n           , _-\\\',\'|~\\~      ~\/      ;-\'_   _-\'     ,;_;_,    ~~-    \r\n  \/~~-\\_\/-\'~\'--\' \\~~| \',    ,\'      \/  \/ ~|-_\\_\/~\/~      ~~--~~~~\'--_\r\n  \/              ,\/\'-\/~ \'\\ ,\' _  , \'|,\'|~                   ._\/-, \/~ \r\n  ~\/-\'~\\_,       \'-,| \'|. \'   ~  ,\\ \/\'~                \/    \/_  \/~   \r\n.-~      \'|        \'\',\\~|\\       _\\~     ,_  ,               \/|      \r\n          \'\\        \/\'~          |_\/~\\\\,-,~  \\ \"         ,_,\/ |      \r\n           |       \/            ._-~\'\\_ _~|              \\ ) \/       \r\n            \\   __-\\           \'\/      ~ |\\  \\_          \/  ~        \r\n  .,         \'\\ |,  ~-_      - |          \\\\_\' ~|  \/\\  \\~ ,          \r\n               ~-_\'  _;       \'\\           \'-,   \\,\' \/\\\/  |          \r\n                 \'\\_,~\'\\_       \\_ _,       \/\'    \'  |, \/|\'          \r\n                   \/     \\_       ~ |      \/         \\  ~\'; -,_.     \r\n                   |       ~\\        |    |  ,        \'-_, ,; ~ ~\\   \r\n                    \\,      \/        \\    \/ \/|            ,-, ,   -, \r\n                     |    ,\/          |  |\' |\/          ,-   ~ \\   \'.\r\n                    ,|   ,\/           \\ ,\/              \\       |    \r\n                    \/    |             ~                 -~~-, \/   _ \r\n                    |  ,-\'                                    ~    \/ \r\n                    \/ ,\'                                      ~      \r\n                    \',|  ~                                           \r\n                      ~\'                                             ";

function rndColours() {
    var hue1 = Math.floor(Math.random() * 360);
    var hue2 = Math.floor(Math.random() * 360);
    // console.log((hue1 + 200)%360);
    while (hue2 < (hue1 + 200) % 360) {
        hue2 = Math.floor(Math.random() * 360);
    }
    col1 = hue1 + ",75%,55%";
    col2 = hue2 + ",75%,55%";

}

function main() {
    rndColours();
    resizeMyCanvas();
    var canvas = document.getElementById('canvas');
    // setupCanvas(canvas);
    ctx = canvas.getContext('2d');
    width = ctx.canvas.clientWidth;
    height = ctx.canvas.clientHeight;
    wormX = (Math.random() * width-500)+500;
    wormY = (Math.random() * height-500)+500;
    console.log(wormX+", "+wormY);
    ctx.font = "12px Courier";
    ctx.fillStyle = "hsla(" + col1 + ",0.5)";

    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        if (hash == "projects") {
            colourSwap(1);
        } else if (hash == "cv") {
            colourSwap(2);
        } else if (hash == "contact") {
            colourSwap(3);
        }
    }

    // dothing(ctx);
    // window.setInterval(function(){dothing()}, 50);
    // renderMap();
    window.setInterval(function () { renderMap() }, 1);

    canvas.addEventListener('mouseenter', function (evt) {
        enableWorm = true;
    }, false);

    canvas.addEventListener('mouseleave', function (evt) {
        enableWorm = false;
    }, false);

    canvas.addEventListener('mousemove', function (evt) {
        enableWorm = true;
        mousePos = getMousePos(canvas, evt);
        ctx.beginPath();

        // ctx.arc(wormX, wormY, 50, 0, 2 * Math.PI, false);
        // ctx.fill();
    }, false);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function renderMap() {
    yMod = Math.random() * 90;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    var mSplit = Asciimap.split("\r\n");
    for (var i = 0; i < mSplit.length; i++) {
        ctx.fillText(mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod), 0, -10 + i * 12 + yMod);
        ctx.fillText(mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod), 0, 235 + i * 12 + yMod);
        ctx.fillText(mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod) + mSplit[i].substring(mod, mSplit[i].length) + mSplit[i].substring(0, mod), 0, 480 + i * 12 + yMod);
        ctx.fillText(mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod) + mSplit[i].substring(mSplit[i].length - mod, mSplit[i].length) + mSplit[i].substring(0, mSplit[i].length - mod), 0, 725 + i * 12 + yMod);

    }
    // console.log(1-0.3-(mod/100));
    ctx.fillStyle = "hsla(" + col + "," + Math.random() / 3 + ")";
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
    if (enableWorm && !(Math.round(wormX) == Math.round(mousePos.x) && Math.round(wormY) == Math.round(mousePos.y))) {
        moveWorm2();
    }
}

function moveWorm2() {
    if (wormX > mousePos.x) {
        wormXvel = -speed;
    } else if (wormX < mousePos.x) {
        wormXvel = speed;
    }
    if (wormY > mousePos.y) {
        wormYvel = -speed;
    } else if (wormY < mousePos.y) {
        wormYvel = speed;
    }
    wormX += wormXvel;
    wormY += wormYvel;
    ctx.beginPath();
    ctx.arc(wormX, wormY, 50, 0, 2 * Math.PI, false);
    ctx.fill();
}

function moveWorm() {
    if (wormX > width) {
        wormXvel = -speed;
    }
    if (wormY > height) {
        wormYvel = -speed;
    }
    if (wormX < 0) {
        wormXvel = speed;
    }
    if (wormY < 0) {
        wormYvel = speed;
    }
    wormX += wormXvel;
    wormY += wormYvel;
    ctx.beginPath();
    ctx.arc(wormX, wormY, 50, 0, 2 * Math.PI, false);
    ctx.fill();

}

function dothing() {
    var x = (width - 100) * Math.random();
    var y = height * Math.random();

    // ctx.fillStyle="hsla(255,255,255,"+Math.random()+")";

    ctx.fillStyle = "hsla(255,255,255," + Math.random() + ")";
    ctx.fillText("liam piesley", x, y);
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

function colourSwap(change) {
    var about = document.getElementById("aboutText");
    var projects = document.getElementById("projectsText");
    var cv = document.getElementById("cvText");
    var contact = document.getElementById("contactText");
    if (change == 0) {
        projects.classList.add("hidden");
        cv.classList.add("hidden");
        contact.classList.add("hidden");
        about.classList.remove("hidden");
    } else if (change == 1) {
        about.classList.add("hidden");
        cv.classList.add("hidden");
        contact.classList.add("hidden");
        projects.classList.remove("hidden");
    } else if (change == 2) {
        about.classList.add("hidden");
        projects.classList.add("hidden");
        contact.classList.add("hidden");
        cv.classList.remove("hidden");
    } else if (change == 3) {
        about.classList.add("hidden");
        projects.classList.add("hidden");
        cv.classList.add("hidden");
        contact.classList.remove("hidden");
    }
    if (change == 1 || change == 3) {
        var side = document.getElementById("side");
        side.style.backgroundColor = "rgb(247, 244, 240)";
        side.style.color = "black";
        document.body.style.backgroundColor = "rgb(247, 244, 240)";
    } else {
        var side = document.getElementById("side");
        side.style.backgroundColor = "black";
        side.style.color = "rgb(247, 244, 240)";
        document.body.style.backgroundColor = "black";
    }


    rndColours();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function setup() {
}

function draw() {
}