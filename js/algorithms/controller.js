// ### colour data ###
var viridis = ['#440154', '#461767','#472c7a', '#413f83','#3b518b', '#2c718e','#27818e', '#21908d','#249f87', '#27ad81','#42bb72', '#5cc863','#aadc32', '#d4e22c','#fde725'];
var inferno = ['#000004', '#100626','#1f0c48', '#3a0e5b','#550f6d', '#88226a','#a12c60', '#ba3655','#cf4844', '#e35933','#ee731f', '#f98c0a','#f9c932', '#fbe46b','#fcffa4'];
var textCol = ['white', 'white','white', 'white','white', 'white','white', 'white','black', 'black','black', 'black','black', 'black','black']

var barGraphAlgos = ['SelectionSort', 'QuickSort', 'SequentialSearch', 'BinarySearch'];
var geometricAlgos = ['PackageWrapping', 'GrahamsScan']
var rootAlgos = ['BisectionMethod', 'NewtonsMethod']

var algorithm;
var traceData;
var traceInd = 0;
var animating = false;
var dataTypesBar = ["Random", "Reversed", "Nearly Sorted"];
var dataTypesGeo = ["Random", "Large Hull"]
var dataTypeInd = 0;

function init(){
    uiInit();
}

function refreshPage(newAlgorithm, newDataType){
    document.querySelector("#screen").scrollTop = 0;
    prevLine = 0;
    line = -1;
    algorithm = newAlgorithm;
    dataTypeInd = newDataType;
    if(algorithm == "SelectionSort"){
        if(dataTypeInd == 0){
            trace = selectionSortRandom;
        }else if(dataTypeInd == 1){
            trace = selectionSortReverse;
        }else{
            trace = selectionSortNearly;
        }
    }else if(algorithm == "QuickSort"){
        if(dataTypeInd == 0){
            trace = quickSortRandom;
        }else if(dataTypeInd == 1){
            trace = quickSortReverse;
        }else{
            trace = quickSortNearly;
        }
    }else if(algorithm == "SequentialSearch"){
        if(dataTypeInd == 0){
            trace = sequentialSearchRandom;
        }else if(dataTypeInd == 1){
            trace = sequentialSearchReverse;
        }else{
            trace = sequentialSearchNearly;
        }
    }else if(algorithm == "BinarySearch"){
        trace = binarySearchSorted;
    }else if(algorithm == "PackageWrapping"){
        if(dataTypeInd == 0){
            trace = packageWrappingRandom;
        }else{
            trace = packageWrappingLarge;
        }
    }else if(algorithm == "GrahamsScan"){
        if(dataTypeInd == 0){
            trace = grahamsScanRandom;
        }else{
            trace = grahamsScanLarge;
        }
    }else if(algorithm == "BisectionMethod"){
        trace = bisectionMethodTrace;
    }else if(algorithm == "NewtonsMethod"){
        trace = newtonsMethodTrace;
    }
    document.querySelector("#"+algorithm+" .togglePlay").style.opacity = 1;
    traceInd = 0;
    animating = false;
    document.querySelector("#"+algorithm+" .togglePlay").src = "res/algorithms/play.svg";
    play = false;
    renderCode();
    document.querySelector("#"+algorithm+" .arrow").style.visibility = "hidden";
    renderComplexity();
}

function nextData(){
    if(barGraphAlgos.includes(algorithm)){
        if (dataTypeInd == 2 ){
            dataTypeInd = 0;
        }else{
            dataTypeInd++;
        }
    }else if(geometricAlgos.includes(algorithm)){
        if (dataTypeInd == 1 ){
            dataTypeInd = 0;
        }else{
            dataTypeInd++;
        }
    }

    updateDataType();
}

function prevData(){
    if(barGraphAlgos.includes(algorithm)){
        if (dataTypeInd == 0 ){
            dataTypeInd = 2;
        }else{
            dataTypeInd--;
        }
    }else if(geometricAlgos.includes(algorithm)){
        if (dataTypeInd == 0 ){
            dataTypeInd = 1;
        }else{
            dataTypeInd--;
        }
    }

    updateDataType();
}

function updateDataType(){
    if(barGraphAlgos.includes(algorithm)){
        document.querySelector("#"+algorithm+" .animation-pane p").innerHTML = "<span onclick=\"prevData()\">&nbsp;&lt;&nbsp;</span>&nbsp; " + dataTypesBar[dataTypeInd] + " &nbsp;<span onclick=\"nextData()\">&nbsp;&gt;&nbsp;</span>"
    }else if(geometricAlgos.includes(algorithm)){
        document.querySelector("#"+algorithm+" .animation-pane p").innerHTML = "<span onclick=\"prevData()\">&nbsp;&lt;&nbsp;</span>&nbsp; " + dataTypesGeo[dataTypeInd] + " &nbsp;<span onclick=\"nextData()\">&nbsp;&gt;&nbsp;</span>"
    }
    
    
    refreshPage(algorithm, dataTypeInd);
    renderAnimation();
    if(barGraphAlgos.includes(algorithm)){
        renderTable();
    }
}