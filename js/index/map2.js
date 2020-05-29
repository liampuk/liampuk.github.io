var mapp5;

var mapSketch = function (p) {
    p.ctx;
    p.width;
    p.height;
    p.ctr = 0;
    p.colBool = 0;

    p.col1;
    p.col2;
    p.col;

    p.mod = 0;

    p.Asciimap = "               ,_   .  ._. _.  .                                     \r\n           , _-\\\',\'|~\\~      ~\/      ;-\'_   _-\'     ,;_;_,    ~~-    \r\n  \/~~-\\_\/-\'~\'--\' \\~~| \',    ,\'      \/  \/ ~|-_\\_\/~\/~      ~~--~~~~\'--_\r\n  \/              ,\/\'-\/~ \'\\ ,\' _  , \'|,\'|~                   ._\/-, \/~ \r\n  ~\/-\'~\\_,       \'-,| \'|. \'   ~  ,\\ \/\'~                \/    \/_  \/~   \r\n.-~      \'|        \'\',\\~|\\       _\\~     ,_  ,               \/|      \r\n          \'\\        \/\'~          |_\/~\\\\,-,~  \\ \"         ,_,\/ |      \r\n           |       \/            ._-~\'\\_ _~|              \\ ) \/       \r\n            \\   __-\\           \'\/      ~ |\\  \\_          \/  ~        \r\n  .,         \'\\ |,  ~-_      - |          \\\\_\' ~|  \/\\  \\~ ,          \r\n               ~-_\'  _;       \'\\           \'-,   \\,\' \/\\\/  |          \r\n                 \'\\_,~\'\\_       \\_ _,       \/\'    \'  |, \/|\'          \r\n                   \/     \\_       ~ |      \/         \\  ~\'; -,_.     \r\n                   |       ~\\        |    |  ,        \'-_, ,; ~ ~\\   \r\n                    \\,      \/        \\    \/ \/|            ,-, ,   -, \r\n                     |    ,\/          |  |\' |\/          ,-   ~ \\   \'.\r\n                    ,|   ,\/           \\ ,\/              \\       |    \r\n                    \/    |             ~                 -~~-, \/   _ \r\n                    |  ,-\'                                    ~    \/ \r\n                    \/ ,\'                                      ~      \r\n                    \',|  ~                                           \r\n                      ~\'                                             ";


    p.setup = function () {
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.canvas = p.createCanvas(p.cnvX, p.cnvY);
        p.canvas.parent('main');
        p.background(0);
        p.textSize(12);
        p.colorMode(p.HSL)
        p.rndColours();
        p.textFont('Courier');
    }


    p.draw = function () {
        p.yMod = Math.random() * 90;
        p.mSplit = p.Asciimap.split("\r\n");

        p.fill(p.color('hsla(' + p.col + ',' + Math.random() / 3 + ')'));
        // console.log('hsla(' + p.col + ',' + Math.random() / 3 + ')');
        // p.fill(0);
        for (var i = 0; i < p.mSplit.length; i++) {
            p.text(p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod) + p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod) + p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod) + p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod), 0, -10 + i * 12 + p.yMod);
            p.text(p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod) + p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod) + p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod) + p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod), 0, 235 + i * 12 + p.yMod);
            p.text(p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod) + p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod) + p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod) + p.mSplit[i].substring(p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mod), 0, 480 + i * 12 + p.yMod);
            p.text(p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod) + p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod) + p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod) + p.mSplit[i].substring(p.mSplit[i].length - p.mod, p.mSplit[i].length) + p.mSplit[i].substring(0, p.mSplit[i].length - p.mod), 0, 725 + i * 12 + p.yMod);
        }
        p.mod++;
        if (p.mod > p.mSplit[0].length) {
            p.mod = 0;
        }
        if (p.ctr > Math.floor(Math.random() * 100)) {
            p.ctr = 0;
            if (p.colBool == 0) {
                p.col = p.col1;
                p.colBool = 1;
            } else {
                p.col = p.col2;
                p.colBool = 0;
            }
        }
        p.ctr++;
    }

    p.rndColours = function () {
        p.hue1 = Math.floor(Math.random() * 361);
        p.hue2 = (p.hue1 + ((Math.floor(Math.random() * 5) + 1) * 60)) % 360;
        p.col1 = p.hue1 + ",75%,55%";
        p.col2 = p.hue2 + ",75%,55%";
        p.col = p.col1;
    }

    p.reset = function(light){
        if(light){
            p.background('#fff');
            p.colMod = 0;
        }else{
            p.background('#000');
            p.colMod = 10;
        }
        p.rndColours();
    }
}


function mapAnimation() {
    mapp5 = new p5(mapSketch);
}
