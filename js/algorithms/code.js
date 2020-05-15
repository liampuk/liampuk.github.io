function renderCode(){
    var code = pseudoCodeJson[algorithm];
    var lineNumsBuilder = "";
    var codeBuilder = "";
    for(var i=0; i<code.length; i++){
        lineNumsBuilder += "<p>"+(i+1)+"</p>"
        codeBuilder += "<p>"+code[i]+"</p>";
    }
    document.querySelector("#"+algorithm+" .line-nums").innerHTML = lineNumsBuilder;
    document.querySelector("#"+algorithm+" .code").innerHTML = codeBuilder;
    document.querySelector("#"+algorithm+" .line-nums p").classList.add("top-line")
    document.querySelector("#"+algorithm+" .code p").classList.add("top-line")
    printStats(0);
}

var line = -1;
var prevLine;
var traceInd = 0;
var play = false;
var speed = 100;

function step(){
    if(traceInd >= trace.length){
        play = false;
        document.querySelector("#"+algorithm+" .togglePlay").src = "res/algorithms/play.svg";
        document.querySelector("#"+algorithm+" .togglePlay").style.opacity = 0.7;
        return;
    }else{
        printStats(traceInd);
        if(barGraphAlgos.includes(algorithm)){
            renderTable(traceInd)
        }
        updateCanvas(traceInd);
        prevLine = line;
        line = trace[traceInd][0]-1;
        document.querySelectorAll("#"+algorithm+" .code p")[line].style.backgroundColor = "#f65929"

        // display arrow if code out of sight
        drawArrow();

        traceInd++;
    }
    if(prevLine >= 0 && line != prevLine){
        document.querySelectorAll("#"+algorithm+" .code p")[prevLine].style.backgroundColor = ""
    }
}

function drawArrow(){
    if(line<0){
        return;
    }
    var lineRect = document.querySelectorAll("#"+algorithm+" .code p")[line].getBoundingClientRect();
    var paneRect = document.querySelector("#"+algorithm+" .code-pane").getBoundingClientRect();
    var lineTop = lineRect.top;
    var lineBottom = lineRect.bottom;
    var paneTop = paneRect.top;
    var paneBottom = paneRect.bottom;

    if(lineTop > paneBottom){
        document.querySelector("#"+algorithm+" .arrow").style.visibility = "visible"
        document.querySelector("#"+algorithm+" .arrow").style.transform = "rotate(90deg)"
    }else if(lineBottom < paneTop){
        document.querySelector("#"+algorithm+" .arrow").style.visibility = "visible"
        document.querySelector("#"+algorithm+" .arrow").style.transform = "rotate(-90deg)"
    }
    else{
        document.querySelector("#"+algorithm+" .arrow").style.visibility = "hidden"
    }
}

function stepBack(){
    if(traceInd >= 2){
        document.querySelector("#"+algorithm+" .togglePlay").style.opacity = 1;
        traceInd -= 2;
        step();
    }
}

function togglePlay(){
    if(play == true){
        document.querySelector("#"+algorithm+" .togglePlay").src = "res/algorithms/play.svg";
        play = false;
    }else{
        document.querySelector("#"+algorithm+" .togglePlay").src = "res/algorithms/pause.svg";
        play = true;
        run();
    }

}

function run(){
    if(play == false){
        return;
    }
    step();
    setTimeout(function(){
        run()
    }, speed);

}

function reset(){
    document.querySelectorAll("#"+algorithm+" .code p")[line].style.backgroundColor = ""
    document.querySelector("#"+algorithm+" .togglePlay").style.opacity = 1;
    line = -1;
    traceInd = 0;
    step();
}

function printStats(i){
    document.querySelector("#"+algorithm+" .prog-slider").value = (i/((trace.length-1))*100)
    if(algorithm == "SelectionSort"){
        document.querySelector("#"+algorithm+" .stats").innerHTML = "i: "+trace[i][2]+" j: "+trace[i][3]+" min: "+trace[i][4]+" | Step: "+i+"/"+(trace.length-1);
    }else if(algorithm == "QuickSort"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="L: "+trace[i][2]+" R: "+trace[i][3]+" pivot: "+trace[i][4]+" pL: "+trace[i][5]+" pR: "+trace[i][6]+" p: "+trace[i][7]+" | Step: "+i+"/"+(trace.length-1);
    }else if(algorithm == "SequentialSearch"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="key: "+trace[i][3]+" i: "+trace[i][2]+" | Step: "+i+"/"+(trace.length-1);
    }else if(algorithm == "BinarySearch"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="key: "+trace[i][3]+" i: "+trace[i][2]+" L: "+trace[i][4]+" R: "+trace[i][5]+" | Step: "+i+"/"+(trace.length-1);
    }else if(algorithm == "PackageWrapping"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="k: "+trace[i][2]+" i: "+trace[i][4]+" min: "+trace[i][3]+" a: "+trace[i][5]+"&#176; | Step: "+i+"/"+(trace.length-1);        
    }else if(algorithm == "GrahamsScan"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="anchor: ["+trace[i][3]+"] | Step: "+i+"/"+(trace.length-1);        
    }else if(algorithm == "BisectionMethod"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="n: "+trace[i][1]+" flag: "+trace[i][2]+" x0: "+trace[i][3]+" x1: "+trace[i][5]+" m: "+trace[i][7]+" | Step: "+i+"/"+(trace.length-1);
    }else if(algorithm == "NewtonsMethod"){
        document.querySelector("#"+algorithm+" .stats").innerHTML ="n: "+trace[i][1]+" x: "+trace[i][2]+" f(x): "+trace[i][3]+" dx: "+trace[i][4]+" | Step: "+i+"/"+(trace.length-1);
    }
}

function changeSpeed(val){
    // speed = 1000-val;
    speed = 1010-(1-Math.pow(1-val/100, 2))*1000

}

function changeStep(val){
    if(val == 1){
        traceInd = 0;
    }else{
        traceInd = Math.floor((val/100)*(trace.length-1))
    }
    if(val != 100){
        document.querySelector("#"+algorithm+" .togglePlay").style.opacity = 1;
    }
    step()
}