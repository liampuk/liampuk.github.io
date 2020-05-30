var spinp5;

var spinSketch = function (p) {
    p.angle = 0;
    p.i = 0
    p.cols = []
    p.j = 0;
    p.mod = 1;
    p.x = 0;
    p.y = 0;
    p.speed = 3;
    p.mouse = false;
    p.colMod = 10;
    p.interactMode = 0;
    p.tilt = 0.7;
    p.light = false;

    p.setup = function () {
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.smooth();
        p.canvas = p.createCanvas(p.cnvX, p.cnvY, p.WEBGL);
        p.canvas.mouseOver(p.enableMove);
        p.canvas.mouseOut(p.disableMove);
        p.canvas.parent('main')
        // smooth();
        p.bg(false);
        // viridis
        p.cols.push('#440154');
        p.cols.push('#472c7a');
        p.cols.push('#3b518b');
        p.cols.push('#2c718e');
        p.cols.push('#27818e');
        p.cols.push('#21908d');
        p.cols.push('#27ad81');
        p.cols.push('#5cc863');
        p.cols.push('#aadc32');
        p.cols.push('#fde725');
        // inferno
        p.cols.push('#000004');
        p.cols.push('#1f0c48');
        p.cols.push('#550f6d');
        p.cols.push('#88226a');
        p.cols.push('#a12c60');
        p.cols.push('#ba3655');
        p.cols.push('#e35933');
        p.cols.push('#f98c0a');
        p.cols.push('#f9c932');
        p.cols.push('#fcffa4');
    }
    p.draw = function () {
        if(p.interactMode == 1){
            if (p.mouse) {
                p.moveToMouse();
            } else {
                p.moveToCentre();
            }
        }else{
            if(p.mouse){
                p.tiltAim = (p.mouseY/p.height)*1.5+0.1;
                if(p.tilt < p.tiltAim){
                    p.tilt += 0.01;
                }else if(p.tilt > p.tiltAim){
                    p.tilt -= 0.01;
                }
                // p.tilt = (p.mouseY/p.height)*1.5+0.1
            }
            // console.log(p.mouseY+"/"+p.height);
            p.moveToCentre();
            // console.log(tilt);
        }

        p.translate(p.x, p.y);
        // p.rotateZ(p.angle);
        p.rotateY(p.angle*4);
        p.rotateX(p.tilt);
        p.noFill()
        p.stroke(p.cols[p.j+p.colMod]);
        p.box(p.height/4);
        p.translate(0, p.height/4);
        p.box(p.height/4);

        p.translate(0, -(p.height/2));
        p.box(p.height/4);

        p.angle += 0.01;

        p.i++;

        if (p.i == 5) {
            p.i = 0;
            if (p.j == 9) {
                p.mod = -1;
            } else if (p.j == 0) {
                p.mod = 1;
            }
            p.j += p.mod;
        }
    }

    p.enableMove = function () {
        p.mouse = true;
    }

    p.disableMove = function () {
        p.mouse = false;
    }

    p.moveToMouse = function () {
        if (p.mouseX - p.width / 2 < p.x) {
            p.x -= p.speed;
        } else if (p.mouseX - p.width / 2 > p.x) {
            p.x += p.speed;
        }
        if (p.mouseY - p.height / 2 < p.y) {
            p.y -= p.speed;
        } else if (p.mouseY - p.height / 2 > p.y) {
            p.y += p.speed;
        }
    }

    p.moveToCentre = function () {
        if (p.x > 0) {
            p.x -= p.speed;
        } else if (p.x < 0) {
            p.x += p.speed;
        }
        if (p.y > 0) {
            p.y -= p.speed;
        } else if (p.y < 0) {
            p.y += p.speed;
        }
    }
    p.bg = function(light){
        if(light){
            p.light = light;
            p.background('#edeae4');
            p.colMod = 0;
        }else{
            p.light = light;
            p.background('#0d0d0d');
            p.colMod = 10;
        }
    }

    p.bin = function(){
        p.remove();
    }

    p.mouseClicked = function(){
        if(p.mouse){
            if(p.interactMode == 0){
                p.interactMode = 1;
            }else{
                p.interactMode = 0;
            }
        }
    }

    p.resize = function() {
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.resizeCanvas(p.cnvX, p.cnvY);
        p.bg(p.light);
    }
}

function spinAnimation (){
    spinp5 = new p5(spinSketch);
}
