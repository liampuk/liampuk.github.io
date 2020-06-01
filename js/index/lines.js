
var linesp5;

var linesSketch = function (p) {
    p.x = 300;
    p.y = 300;
    p.z = 300;
    p.offsetX;
    p.offsetY;
    p.lineDensity = 10;
    p.planeDensity = 16;
    p.angle = 0.31;
    p.bgCol;

    
    p.cols = []
    p.colMod = 10;
    p.zoomMod;
    p.light = false;

    p.setup = function () {
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
        p.cols.push('#3a0e5b');
        p.cols.push('#550f6d');
        p.cols.push('#88226a');
        p.cols.push('#a12c60');
        p.cols.push('#ba3655');
        p.cols.push('#e35933');
        p.cols.push('#f98c0a');
        p.cols.push('#f9ab1e');
        p.cols.push('#f9c932');
        p.cols.push('#fcffa4');
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.canvas = p.createCanvas(p.cnvX, p.cnvY, p.WEBGL);
        p.canvas.parent('main');
        // offset = width/2-w/2;
        p.offsetX = -p.w / 2;
        p.offsetY = -p.h / 2
        p.strokeWeight(3)
        // p.smooth()
        // p.stroke('rgba(0,0,0,1)');
        p.stroke('rgba(240, 176, 0,0.3)');
        p.stroke('rgba(19, 193, 232,0.8)');
        // p.stroke(40);
        p.bg(p.light);
        p.zoomMod = 0;
    }

    p.draw = function () {
        p.background(p.bgCol);
        p.orbitControl();
        p.noFill();

        p.translate(0,0,-1500)
        p.eyeZ = ((p.height/2.0) / p.tan(p.PI*60.0/360.0));
        p.perspective(p.PI/3.0*0.1, p.width/p.height, p.eyeZ/10.0, p.eyeZ*10.0)
        p.camera(0, -1400, (p.height/2) / p.tan(p.PI/6)*6, 0, 0, 0, 0, 1, 0);
        p.rotateY(-p.angle);
        p.angle+=0.002
        
        p.stroke('#000');
        var c = 0;
        for(var i=0; i<=p.x; i+= p.planeDensity){
            p.stroke(p.cols[Math.floor(c)+p.colMod]);
            for(var j=0; j<p.z; j+= p.lineDensity){
                p.line(-p.x/2+i,-p.y/2,j-p.z/2,-p.x/2+i,p.y/2,j-p.z/2)
            }
            c+=0.5;
        }
    }

    p.bin = function(){
        p.remove();
    }
    
    p.resize = function() {
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.resizeCanvas(p.cnvX, p.cnvY);
        p.bg(p.light);
    }

    p.bg = function(light){
        if(light){
            p.light = light;
            p.bgCol = '#edeae4';
            p.colMod = 0;
        }else{
            p.light = light;
            p.bgCol = '#0d0d0d';
            p.colMod = 10;
        }
    }
}

function linesAnimation (light){
    linesp5 = new p5(linesSketch);
    linesp5.bg(light)
}
