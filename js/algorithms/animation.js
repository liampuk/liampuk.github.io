var cW = 0;
var cH = 0;

function renderAnimation(){
    var canvas = document.getElementById(algorithm+"Canvas");
    // canvas.width = canvas.offsetWidth-16;
    // canvas.height = canvas.offsetHeight-16;
    canvas.width = 510;
    canvas.height = 406;
    cW = canvas.width;
    cH = canvas.height;
    rectWidth = (cW-(15*3))/15;
    maxRectHeight = cH-20;
    updateCanvas(0);
}

function renderTable(){
    var table = "<table><tr>"
    for(var i=0; i<15; i++){
        table+="<th style=\"background-color: "+viridis[trace[traceInd][1][i]-1]+";color: "+textCol[trace[traceInd][1][i]-1]+"\">"+trace[traceInd][1][i]+"</th>";
    }
    table += "</tr></table>"
    document.querySelector("#"+algorithm+" .animation-data").innerHTML = table;   
}

function renderGeoKey(){
    var c = document.querySelector("#"+algorithm+" .animation-data canvas")
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(38, 38, 3, 0, 2*Math.PI);
    ctx.arc(154, 16, 3, 0, 2*Math.PI);
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.fillStyle = "rgb(246, 89, 41)";
    ctx.fill();
    ctx.stroke();
}

function renderRootKey(){
    var c = document.querySelectorAll("#"+algorithm+" .animation-data canvas")[0]
    var ctx = c.getContext("2d");
    if(algorithm == "BisectionMethod"){
   
        ctx.beginPath();
        ctx.moveTo(5 , 5 );
        ctx.bezierCurveTo(26 , 31 , 64 , 45 , 95 , 45 );
        ctx.strokeStyle = "rgb(246, 89, 41)";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
    
        ctx.fillStyle = getBarCol();
        ctx.strokeStyle = getBarCol();
    
        ctx.beginPath();
        ctx.arc(20, 19, 4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(70, 42, 4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }else if(algorithm == "NewtonsMethod"){
        ctx.lineWidth = 2;
        ctx.strokeStyle = getBarCol();
        ctx.beginPath();
        ctx.moveTo(10,10)
        ctx.lineTo(90,40)
        ctx.stroke();
    }
    

    var c = document.querySelectorAll("#"+algorithm+" .animation-data canvas")[1]
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(5 , 5 );
    ctx.bezierCurveTo(26 , 31 , 64 , 45 , 95 , 45 );
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

   
    // m
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(127,127,127,0.5)"
    ctx.beginPath();
    ctx.moveTo(40,0);
    ctx.lineTo(40,50);
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.strokeStyle = getBarCol()
    ctx.fillStyle = getBarColOpp();
    ctx.beginPath();
    ctx.arc(40, 32, 4, 0, 2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();


}

var rectWidth = 0;
var maxRectHeight = 0;

function initCanvas(){
    var canvas = document.getElementById(algorithm+"Canvas");
    canvas.width = canvas.offsetWidth-16;
    canvas.height = canvas.offsetHeight-16;
    cW = canvas.width;
    cH = canvas.height;
    rectWidth = (cW-(15*3))/15;
    maxRectHeight = cH-20;
    updateCanvas(0);
}

function updateCanvas(){
    renderComplexity();
    var canvas = document.getElementById(algorithm+"Canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(traceInd>=trace.length){
        traceInd = trace.length-1;
    }

    // ############################
    // ### Geometric Algorithms ###
    // ############################

    if(algorithm == "PackageWrapping"){
        var k = trace[traceInd][2];
        //draw circles
        for(var i=0; i<20; i++){
            var x = ((trace[traceInd][1][i][0])/100)*cW;
            var y = cH-(trace[traceInd][1][i][1]/100)*cH;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2*Math.PI);
            if((i<=k && traceInd > 12 && traceInd != trace.length-1) || (traceInd == trace.length-1 && i<k)){
                ctx.strokeStyle = "rgb(246, 89, 41)";
                ctx.fillStyle = "rgb(246, 89, 41)";
                ctx.fill();
            }else{
                ctx.strokeStyle = getBarCol();
                ctx.fillStyle = getBarCol();
            }
            ctx.stroke();
        }
        if(k>0){
            ctx.beginPath();
            for(var i=1; i<=k; i++){
                if(i<20){
                    var prevX = ((trace[traceInd][1][i-1][0])/100)*cW;
                    var prevY = cH-(trace[traceInd][1][i-1][1]/100)*cH;
                    if(traceInd == trace.length-1 && i == k){
                        var x = ((trace[traceInd][1][0][0])/100)*cW;
                        var y = cH-(trace[traceInd][1][0][1]/100)*cH;
                    }else{
                        var x = ((trace[traceInd][1][i][0])/100)*cW;
                        var y = cH-(trace[traceInd][1][i][1]/100)*cH;
                    }
                    if(i == 1){
                        ctx.moveTo(prevX, prevY);
    
                    }
                    ctx.lineTo(x,y);
                }
            }
            ctx.strokeStyle = "rgb(246, 89, 41)";
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = "rgba(246, 89, 41,0.1)";
            ctx.fill();
        }
        if(traceInd != trace.length-1){
            var check = trace[traceInd][4]-1;
            if(check >=0 && k <20){
                var curKX = ((trace[traceInd][1][k][0])/100)*cW;
                var curKY = cH-(trace[traceInd][1][k][1]/100)*cH;
                var iX = ((trace[traceInd][1][check][0])/100)*cW;
                var iY = cH-(trace[traceInd][1][check][1]/100)*cH;
                ctx.beginPath();
                ctx.moveTo(curKX, curKY);
                ctx.lineTo(iX,iY);
                ctx.strokeStyle = "rgba(127,127,127,0.8)";
                ctx.stroke(); 
            }
        }
        if(traceInd != trace.length-1 && traceInd > 13){
            var min = trace[traceInd][3];
            if(min<20){
                var curKX = ((trace[traceInd][1][k][0])/100)*cW;
                var curKY = cH-(trace[traceInd][1][k][1]/100)*cH;
                var iX = ((trace[traceInd][1][min][0])/100)*cW;
                var iY = cH-(trace[traceInd][1][min][1]/100)*cH;
                ctx.beginPath();
                ctx.moveTo(curKX, curKY);
                ctx.lineTo(iX,iY);
                ctx.strokeStyle = getBarCol();
                ctx.stroke(); 
            }
        }        
    }else if(algorithm == "GrahamsScan"){
        var hull = trace[traceInd][2];
        for(var i=0; i<20; i++){
            var x = ((trace[traceInd][1][i][0])/100)*cW;
            var y = cH-(trace[traceInd][1][i][1]/100)*cH;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2*Math.PI);

            var hullPt = false;

            for(var j=0; j<hull.length; j++){
                if(hull[j][0] == trace[traceInd][1][i][0] && hull[j][1] == trace[traceInd][1][i][1]){
                    hullPt = true;
                }
            }

            if(hullPt){
                ctx.strokeStyle = "rgb(246, 89, 41)";
                ctx.fillStyle = "rgb(246, 89, 41)";
                ctx.fill();
            }else{
                ctx.strokeStyle = getBarCol();
                ctx.fillStyle = getBarCol();
            }
            ctx.stroke();
        }
        ctx.closePath();
        ctx.beginPath();
        if(hull.length>0){
            var x = ((trace[traceInd][2][0][0])/100)*cW;
            var y = cH-((trace[traceInd][2][0][1])/100)*cH;
            ctx.moveTo(x,y)
        }
        for(var i=1; i<hull.length; i++){
            var x = ((trace[traceInd][2][i][0])/100)*cW;
            var y = cH-((trace[traceInd][2][i][1])/100)*cH;
            ctx.lineTo(x,y);
        }
        ctx.strokeStyle = "rgb(246, 89, 41)";
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(246, 89, 41,0.1)";
        ctx.fill();
        
    // ############################
    // ### Bar Graph Algorithms ###
    // ############################

    }else if(barGraphAlgos.includes(algorithm)){
        for(var i=0; i<15; i++){
            ctx.beginPath();
            var rectHeight = maxRectHeight*(trace[traceInd][1][i]/15);
            var x = 1+(3+rectWidth)*i;
            var y = cH-rectHeight;
            ctx.rect(x, y, rectWidth, rectHeight);
            if(algorithm == "SelectionSort"){
                if(trace[traceInd][3] == i || trace[traceInd][4] == i){
                    ctx.fillStyle = "rgb(246, 89, 41)";
                }else{
                    ctx.fillStyle = getBarCol();
                }
            }else if(algorithm == "QuickSort"){
                if(trace[traceInd][5] == i || trace[traceInd][6] == i){
                    ctx.fillStyle = "rgb(246, 89, 41)";
                }else{
                    ctx.fillStyle = getBarCol();
                }
            }else if(algorithm == "SequentialSearch"){
                if(trace[traceInd][2] == i){
                    ctx.fillStyle = "rgb(246, 89, 41)";
                }else{
                    ctx.fillStyle = getBarCol();
                }
            }else if(algorithm == "BinarySearch"){
                if(trace[traceInd][2] == i){
                    ctx.fillStyle = "rgb(246, 89, 41)";
                }else{
                    ctx.fillStyle = getBarCol();
                }
            }
            ctx.fill();
        }
        
    // ###########################
    // ### Function Algorithms ###
    // ###########################

    }
    
    if(rootAlgos.includes(algorithm)){
        // ### Draw axes ###

        ctx.beginPath();
        ctx.strokeStyle = getBarCol();
        // draw x axis
        ctx.moveTo(0,cH/2+0.5);
        ctx.lineTo(cW,cH/2+0.5);
        // draw y axis
        ctx.moveTo(xToCanv(0),0);
        ctx.lineTo(xToCanv(0),cH);
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.stroke();

        // ### draw f(x) ###
        
        ctx.beginPath();
        ctx.strokeStyle = "rgb(246, 89, 41)";
        for(var i = 0; i<cW; i++){
            var input = canvToX(i);
            var output = yToCanv(func(input));
            if(i==0){
                ctx.moveTo(i, output);
            }else{
                ctx.lineTo(i, output);
            }
        }
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
    }

    if(algorithm == "NewtonsMethod"){
        var x = trace[traceInd][2];
        var y = trace[traceInd][3];
        var dx = trace[traceInd][4];

        ctx.beginPath();
        ctx.strokeStyle = getBarCol();
        ctx.setLineDash([3, 4]);
        ctx.moveTo(xToCanv(x), yToCanv(y))
        ctx.lineTo(xToCanv(x),cH/2+0.5)
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        var nextX = x;
        var nextDX = dx
        for(var i=traceInd+1; i<trace.length; i++){
            if(trace[i][2] != x){
                nextX = trace[i][2]
                break;
            }
        }
        if(trace[traceInd][0]!=11){
            for(var i=traceInd+1; i<trace.length; i++){
                if(trace[i][4] != dx){
                    nextDX = trace[i][4]
                    break;
                }
            }
        }

        ctx.lineWidth = 2;
        ctx.strokeStyle = getBarCol();
        ctx.beginPath();
        ctx.moveTo(xToCanv(-0.1), yToCanv(nextDX*(-0.1-nextX)))
        ctx.lineTo(xToCanv(1.1), yToCanv(nextDX*(1.1-nextX)))
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.strokeStyle = getBarCol();
        ctx.fillStyle = getBarColOpp();
        ctx.beginPath();
        ctx.arc(xToCanv(x), yToCanv(y), 4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.font = "30px VT323";
        ctx.fillStyle = getBarCol();
        ctx.fillText(("x   : "+trace[traceInd][2]),350,25);
        ctx.fillText(("f(x): "+trace[traceInd][3]),350,55);
        // ctx.fillText(("m   : "+trace[traceInd][7]),350,85);
        // ctx.fillText(("f(m): "+trace[traceInd][8]),350,115);

    }

    if(algorithm == "BisectionMethod"){

        // ctx.strokeStyle = "rgb(246, 89, 41)";
        // ctx.fillStyle = "rgb(246, 89, 41)";

        // ### draw points ###
        var x0 = trace[traceInd][3]
        var y0 = trace[traceInd][4]
        var x1 = trace[traceInd][5]
        var y1 = trace[traceInd][6]
        var xm = trace[traceInd][7]
        var ym = trace[traceInd][8]
        console.log(xToCanv(x0)+", "+yToCanv(y0))

        ctx.lineWidth = 2;

        ctx.fillStyle = getBarCol();
        ctx.strokeStyle = getBarCol();

        // x0
        ctx.beginPath();
        ctx.arc(xToCanv(x0), yToCanv(y0), 4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.setLineDash([3, 4]);
        ctx.moveTo(xToCanv(x0), yToCanv(y0))
        ctx.lineTo(xToCanv(x0),cH/2+0.5)
        ctx.moveTo(xToCanv(x0), yToCanv(y0))
        ctx.lineTo(xToCanv(0),yToCanv(y0))
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);
        
        // x1
        ctx.beginPath();
        ctx.arc(xToCanv(x1), yToCanv(y1), 4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.setLineDash([3, 4]);
        ctx.moveTo(xToCanv(x1), yToCanv(y1))
        ctx.lineTo(xToCanv(x1),cH/2+0.5)
        ctx.moveTo(xToCanv(x1), yToCanv(y1))
        ctx.lineTo(xToCanv(0),yToCanv(y1))
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // m
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(127,127,127, 0.4)"
        ctx.beginPath();
        ctx.moveTo(xToCanv(xm)+0.5,0);
        ctx.lineTo(xToCanv(xm)+0.5,cH);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = getBarCol()
        ctx.fillStyle = getBarColOpp();
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(xToCanv(xm), yToCanv(ym), 4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // text

        ctx.font = "30px VT323";
        ctx.fillStyle = getBarCol();
        ctx.fillText(("x0  : "+trace[traceInd][3]),350,25);
        ctx.fillText(("x1  : "+trace[traceInd][5]),350,55);
        ctx.fillText(("m   : "+trace[traceInd][7]),350,85);
        ctx.fillText(("f(m): "+trace[traceInd][8]),350,115);

        // " x0: "+trace[i][3]+" x1: "+trace[i][5]+" m: "+trace[i][7]


    }
}

// Graph helper functions

function func(x){
    return Math.pow(x,3)-(3*x)+1;
}

function canvToX(x){
    return (x/cW)*1.2-0.1;
}

function yToCanv(y){
    return cH-(y*(cH/3)+(cH/2))
}

function xToCanv(x){
    return (cW*(x+0.1))/1.2
}

function lineFunc(m, x, c){
    return (m*x)+c
}

// get theme colour

function getBarCol(){
    if(dark){
        return "white";
    }
    return "black";
}

function getBarColOpp(){
    if(dark){
        return "black";
    }
    return "white";
}

function renderComplexity(){
    var canvas = document.querySelector("#"+algorithm+" .complexity canvas");
    var ctx = canvas.getContext("2d");

    // n(ctx);
    // nlogn(ctx);
    // logn(ctx);
    // n2(ctx);
    // o1(ctx);
    if(algorithm == "SelectionSort"){
        o1(ctx);
        n2(ctx);
    }else if(algorithm == "QuickSort"){
        nlogn(ctx);
        n2(ctx);
    }else if(algorithm == "SequentialSearch"){
        o1(ctx);
        n(ctx);
    }else if(algorithm == "BinarySearch"){
        logn(ctx);
        o1(ctx);
    }else if(algorithm == "PackageWrapping"){
        n2(ctx);
        n(ctx);
    }else if(algorithm == "GrahamsScan"){
        nlogn(ctx);
    }else if(algorithm == "BisectionMethod"){
        n(ctx, "h/2")
    }else if(algorithm == "NewtonsMethod"){
        n2(ctx, "h²")
    }

    ctx.beginPath();
    ctx.strokeStyle = getBarCol();
    ctx.lineWidth = 2;
    ctx.moveTo(1,0);
    ctx.lineTo(1,279);
    ctx.lineTo(280,279);
    ctx.stroke();
    ctx.closePath();

}

function n2(ctx, m="n²"){
    ctx.moveTo(1,279);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.lineWidth = 3;
    for(var i=1; i<280;i++){
        ctx.lineTo(i,280-i*i);
    }
    ctx.stroke();
    ctx.font = "30px VT323";
    ctx.fillStyle = getBarCol();
    ctx.fillText(m,10,25);
}

function o1(ctx){
    ctx.moveTo(1,279);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.lineWidth = 3;
    for(var i=1; i<280;i++){
        ctx.lineTo(i,280-3);
    }
    ctx.stroke();
    ctx.font = "30px VT323";
    ctx.fillStyle = getBarCol();
    ctx.fillText("1",250,270);
}

function n(ctx, m="n"){
    ctx.moveTo(1,279);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.lineWidth = 3;
    for(var i=1; i<280;i++){
        ctx.lineTo(i,280-i);
    }
    ctx.stroke();
    ctx.font = "30px VT323";
    ctx.fillStyle = getBarCol();
    ctx.fillText(m,150,130);
}

function logn(ctx){
    ctx.moveTo(1,279);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.lineWidth = 3;
    for(var i=1; i<280;i++){
        ctx.lineTo(i,280-Math.log(i)*3);
    }
    ctx.stroke();

    ctx.font = "30px VT323";
    ctx.fillStyle = getBarCol();
    ctx.fillText("logn",150,262);
}

function nlogn(ctx){
    ctx.moveTo(1,279);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(246, 89, 41)";
    ctx.lineWidth = 3;
    for(var i=1; i<280;i++){
        ctx.lineTo(i,280-i*Math.log(i));
    }
    ctx.stroke();
    ctx.font = "30px VT323";
    ctx.fillStyle = getBarCol();
    ctx.fillText("nlogn",35,60);
}